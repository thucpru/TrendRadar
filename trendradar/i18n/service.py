# coding=utf-8

from typing import Dict, List

from .catalog_vi_vn import TEXTS as VI_TEXTS
from .catalog_en import TEXTS as EN_TEXTS
from .catalog_zh_cn import TEXTS as ZH_CN_TEXTS

DEFAULT_LOCALE = "vi-VN"
FALLBACK_LOCALE = "zh-CN"

CATALOGS: Dict[str, Dict[str, str]] = {
    "vi-VN": VI_TEXTS,
    "en": EN_TEXTS,
    "zh-CN": ZH_CN_TEXTS,
}

ALIASES = {
    "vi": "vi-VN",
    "vi-vn": "vi-VN",
    "vi_vn": "vi-VN",
    "zh": "zh-CN",
    "zh-cn": "zh-CN",
    "zh_cn": "zh-CN",
    "en-us": "en",
    "en_us": "en",
    "en-gb": "en",
    "en_gb": "en",
    "en": "en",
}


def normalize_locale(value: str) -> str:
    if not value:
        return DEFAULT_LOCALE
    normalized = value.strip().lower()
    return ALIASES.get(normalized, value if value in CATALOGS else DEFAULT_LOCALE)


def get_locale_chain(locale: str) -> List[str]:
    current = normalize_locale(locale)
    chain: List[str] = [current]
    if current != FALLBACK_LOCALE:
        chain.append(FALLBACK_LOCALE)
    return chain


def t(key: str, locale: str, **kwargs) -> str:
    for loc in get_locale_chain(locale):
        text = CATALOGS.get(loc, {}).get(key)
        if text is None:
            continue
        if kwargs:
            try:
                return text.format(**kwargs)
            except Exception:
                return text
        return text
    return key


def mode_to_report_type(mode: str, locale: str) -> str:
    if mode == "current":
        return t("shared.report_type.current", locale)
    if mode == "incremental":
        return t("shared.report_type.incremental", locale)
    return t("shared.report_type.daily", locale)
