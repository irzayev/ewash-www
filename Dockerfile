FROM node:20-alpine AS assets

WORKDIR /app

COPY package.json package-lock.json* tailwind.config.js ./
COPY app/static/css/tailwind.input.css ./app/static/css/tailwind.input.css
COPY app/templates ./app/templates

RUN npm ci && npm run build:css

FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
COPY --from=assets /app/app/static/css/tailwind.css ./app/static/css/tailwind.css

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl -f http://localhost:8080/healthz || exit 1

CMD ["gunicorn", "-b", "0.0.0.0:8080", "-w", "2", "--access-logfile", "-", "wsgi:app"]
