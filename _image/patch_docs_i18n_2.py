from pathlib import Path

path = Path("D:/AI/TrendRadar/docs/assets/i18n.js")
text = path.read_text(encoding="utf-8")

entries = {
    "vi-VN": {
        "docs.action.remove": "Gỡ",
        "docs.timeline.action.delete_day_plan": "Xóa day plan",
        "docs.timeline.empty.day_plan_uses_default": "Trống (cả ngày dùng default)",
        "docs.timeline.hint.filter_method_default": "Để trống để theo filter.method toàn cục",
        "docs.timeline.hint.filter_method_inherit": "Để trống để kế thừa default (sau đó fallback toàn cục)",
        "docs.timeline.label.day_plan": "Day plan",
        "docs.timeline.label.mode": "Chế độ",
        "docs.timeline.legend.analyze": "Phân tích",
        "docs.timeline.legend.collect_only": "Chỉ thu thập",
        "docs.timeline.legend.default": "Mặc định (default)",
        "docs.timeline.legend.push": "Đẩy",
        "docs.timeline.legend.push_analyze": "Đẩy + phân tích",
        "docs.timeline.option.inherit": "Kế thừa",
        "docs.timeline.section.day_plans": "Day plans",
        "docs.timeline.section.filter_override_optional": "Filter override (tùy chọn)",
        "docs.timeline.section.periods": "Khung giờ (Periods)",
        "docs.timeline.section.week_map": "Week map",
        "docs.timeline.section.week_view": "Week view",
        "docs.timeline.status.current": "Hiện tại",
        "docs.timeline.tooltip.current_time": "Thời gian hiện tại {time}",
        "docs.timeline.tooltip.uses_default": "Dùng cấu hình default",
        "docs.timeline.unset": "(chưa đặt)"
    },
    "en": {
        "docs.action.remove": "Remove",
        "docs.timeline.action.delete_day_plan": "Delete day plan",
        "docs.timeline.empty.day_plan_uses_default": "Empty (use default all day)",
        "docs.timeline.hint.filter_method_default": "Leave empty to follow global filter.method",
        "docs.timeline.hint.filter_method_inherit": "Leave empty to inherit from default (then fallback to global)",
        "docs.timeline.label.day_plan": "Day plan",
        "docs.timeline.label.mode": "Mode",
        "docs.timeline.legend.analyze": "Analyze",
        "docs.timeline.legend.collect_only": "Collect only",
        "docs.timeline.legend.default": "Default (default)",
        "docs.timeline.legend.push": "Push",
        "docs.timeline.legend.push_analyze": "Push + analyze",
        "docs.timeline.option.inherit": "Inherit",
        "docs.timeline.section.day_plans": "Day plans",
        "docs.timeline.section.filter_override_optional": "Filter override (optional)",
        "docs.timeline.section.periods": "Periods",
        "docs.timeline.section.week_map": "Week map",
        "docs.timeline.section.week_view": "Week view",
        "docs.timeline.status.current": "Current",
        "docs.timeline.tooltip.current_time": "Current time {time}",
        "docs.timeline.tooltip.uses_default": "Using default configuration",
        "docs.timeline.unset": "(unset)"
    },
    "zh-CN": {
        "docs.action.remove": "移除",
        "docs.timeline.action.delete_day_plan": "删除日计划",
        "docs.timeline.empty.day_plan_uses_default": "空 (全天走 default)",
        "docs.timeline.hint.filter_method_default": "不填则跟随全局 filter.method",
        "docs.timeline.hint.filter_method_inherit": "不填则继承 default（再回退全局）",
        "docs.timeline.label.day_plan": "日计划",
        "docs.timeline.label.mode": "模式",
        "docs.timeline.legend.analyze": "分析",
        "docs.timeline.legend.collect_only": "仅采集",
        "docs.timeline.legend.default": "默认 (default)",
        "docs.timeline.legend.push": "推送",
        "docs.timeline.legend.push_analyze": "推送 + 分析",
        "docs.timeline.option.inherit": "继承",
        "docs.timeline.section.day_plans": "日计划",
        "docs.timeline.section.filter_override_optional": "筛选覆盖（可选）",
        "docs.timeline.section.periods": "时间段 (Periods)",
        "docs.timeline.section.week_map": "周映射",
        "docs.timeline.section.week_view": "周视图",
        "docs.timeline.status.current": "当前",
        "docs.timeline.tooltip.current_time": "当前时间 {time}",
        "docs.timeline.tooltip.uses_default": "使用 default 配置",
        "docs.timeline.unset": "(未设置)"
    }
}


def js_quote(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")


def find_object_bounds(src: str, marker: str):
    start = src.find(marker)
    if start < 0:
        raise ValueError(f"marker not found: {marker}")
    brace = src.find('{', start)
    depth = 0
    i = brace
    in_str = None
    esc = False
    while i < len(src):
        ch = src[i]
        if in_str:
            if esc:
                esc = False
            elif ch == '\\':
                esc = True
            elif ch == in_str:
                in_str = None
        else:
            if ch in ('"', "'"):
                in_str = ch
            elif ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return brace, i
        i += 1
    raise ValueError('unbalanced braces')


def add_entries(src: str, marker: str, kv: dict):
    lbrace, rbrace = find_object_bounds(src, marker)
    block = src[lbrace:rbrace + 1]
    additions = []
    for k, v in kv.items():
        if f"'{k}':" not in block:
            additions.append(f"      '{k}': '{js_quote(v)}',")
    if not additions:
        return src
    return src[:rbrace] + '\n' + '\n'.join(additions) + '\n' + src[rbrace:]


out = text
out = add_entries(out, "'vi-VN': {", entries['vi-VN'])
out = add_entries(out, "en: {", entries['en'])
out = add_entries(out, "'zh-CN': {", entries['zh-CN'])
path.write_text(out, encoding='utf-8')
print('patched i18n.js with timeline UI keys')
