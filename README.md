# eWash.az — Landing Page

Сайт-визитка для ERP-системы управления автомойкой eWasher. Дизайн **Liquid Glass** (Obsidian & Gilt) на основе Google Stitch.

Языки: **Русский** и **Азербайджанский**.

## Запуск (Docker)

```bash
cp .env.example .env
# отредактируйте .env — контакты, DEMO_URL, APP_URL

docker compose build
docker compose up -d
```

Откройте http://localhost:8080

Переключение языка — кнопки RU / AZ в шапке или cookie сохраняется автоматически.

## Переменные окружения

| Переменная | Описание |
|---|---|
| `SECRET_KEY` | Секрет Flask |
| `DEFAULT_LANG` | Язык по умолчанию (`ru` / `az`) |
| `CONTACT_EMAIL` | Email для CTA |
| `CONTACT_PHONE` | Телефон для CTA |
| `DEMO_URL` | Ссылка на демо (опционально) |
| `APP_URL` | Ссылка на вход в ERP (опционально) |

## Локальная разработка

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env

npm install
npm run build:css   # после изменения шаблонов или tailwind.config.js
npm run watch:css   # авто-сборка при разработке

flask --app wsgi run --debug -p 8080
```

## Стек

- Flask 3 + Gunicorn
- Tailwind CSS 3 (CLI, production build)
- Inter + Material Symbols
