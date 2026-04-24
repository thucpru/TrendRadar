# coding=utf-8

import os
from pathlib import Path
from typing import Callable, Tuple

import yaml

from trendradar.i18n import normalize_locale, t as tr_text


def _default_project_root() -> Path:
    return Path(__file__).resolve().parents[2]


def resolve_locale(project_root: str = None) -> str:
    env_locale = (os.environ.get("UI_LANGUAGE") or "").strip()
    if env_locale:
        return normalize_locale(env_locale)

    root = Path(project_root).resolve() if project_root else _default_project_root()
    config_path = root / "config" / "config.yaml"

    try:
        with open(config_path, "r", encoding="utf-8") as f:
            config_data = yaml.safe_load(f) or {}
        app_config = config_data.get("app", {}) or {}
        return normalize_locale(str(app_config.get("ui_language", "vi-VN")))
    except Exception:
        return normalize_locale("vi-VN")


def tr(key: str, project_root: str = None, **kwargs) -> str:
    locale = resolve_locale(project_root)
    return tr_text(key, locale, **kwargs)


def get_translator(project_root: str = None) -> Tuple[Callable[..., str], str]:
    locale = resolve_locale(project_root)

    def _translate(key: str, **kwargs) -> str:
        return tr_text(key, locale, **kwargs)

    return _translate, locale
