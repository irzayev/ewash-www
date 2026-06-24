import os


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "dev-landing-secret")
    DEFAULT_LANG = os.environ.get("DEFAULT_LANG", "ru")
    SUPPORTED_LANGS = ("az", "ru")
    CONTACT_EMAIL = os.environ.get("CONTACT_EMAIL", "info@ewash.az")
    CONTACT_PHONE = os.environ.get("CONTACT_PHONE", "+994 12 345 67 89")
    DEMO_URL = os.environ.get("DEMO_URL", "#demo")
    APP_URL = os.environ.get("APP_URL", "#")
    SEND_FILE_MAX_AGE_DEFAULT = int(os.environ.get("STATIC_CACHE_SECONDS", 31536000))
