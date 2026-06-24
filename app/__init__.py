from flask import Flask

from .config import Config


def create_app(config_class: type = Config) -> Flask:
    app = Flask(__name__)
    app.config.from_object(config_class)

    from .blueprints.landing.routes import landing_bp

    app.register_blueprint(landing_bp)

    return app
