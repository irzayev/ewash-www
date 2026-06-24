from datetime import datetime

from flask import Blueprint, current_app, redirect, render_template, request, url_for

from app.i18n.messages import get_messages

landing_bp = Blueprint("landing", __name__)


def _resolve_lang() -> str:
    lang = request.args.get("lang") or request.cookies.get("lang")
    if lang in current_app.config["SUPPORTED_LANGS"]:
        return lang
    return current_app.config["DEFAULT_LANG"]


@landing_bp.route("/")
def index():
    lang = _resolve_lang()
    t = get_messages(lang)
    resp = render_template(
        "index.html",
        lang=lang,
        t=t,
        year=datetime.now().year,
        contact_email=current_app.config["CONTACT_EMAIL"],
        contact_phone=current_app.config["CONTACT_PHONE"],
        demo_url=current_app.config["DEMO_URL"],
        app_url=current_app.config["APP_URL"],
        supported_langs=current_app.config["SUPPORTED_LANGS"],
    )
    from flask import make_response

    response = make_response(resp)
    if request.args.get("lang"):
        response.set_cookie("lang", lang, max_age=60 * 60 * 24 * 365)
    return response


@landing_bp.route("/set-lang/<lang>")
def set_lang(lang: str):
    if lang not in current_app.config["SUPPORTED_LANGS"]:
        lang = current_app.config["DEFAULT_LANG"]
    response = redirect(request.referrer or url_for("landing.index"))
    response.set_cookie("lang", lang, max_age=60 * 60 * 24 * 365)
    return response


@landing_bp.route("/healthz")
def healthz():
    return {"status": "ok"}
