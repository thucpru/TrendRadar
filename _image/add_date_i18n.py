from pathlib import Path

base = Path(r"D:/AI/TrendRadar")
paths = [
    base / "trendradar/i18n/catalog_vi_vn.py",
    base / "trendradar/i18n/catalog_en.py",
    base / "trendradar/i18n/catalog_zh_cn.py",
]

entries = {
    "mcp.date.error.query_empty": "Date query cannot be empty",
    "mcp.date.error.query_empty_suggestion": "Provide a valid date query, for example: today, yesterday, 2025-10-10",
    "mcp.date.error.days_too_large": "Days value is too large: {days} days",
    "mcp.date.error.days_too_large_suggestion": "Use a relative date within 365 days or provide an absolute date",
    "mcp.date.error.invalid_date": "Invalid date: {date_query}",
    "mcp.date.error.invalid_date_value": "Invalid date value: {error}",
    "mcp.date.error.unrecognized_format": "Unrecognized date format: {date_query}",
    "mcp.date.error.unrecognized_format_suggestion": "Supported formats: relative dates (today, yesterday, 3 days ago), weekdays (last monday, this friday), absolute dates (2025-10-10, 10/10, 2025/10/10)",
    "mcp.date.error.future_date": "Cannot query future date: {date}",
    "mcp.date.error.future_date_suggestion": "Use today or a past date",
    "mcp.date.error.too_old": "Date is too old: {date} ({days_ago} days ago)",
    "mcp.date.error.too_old_suggestion": "Query data within the last {max_days} days",
    "mcp.date.error.expression_empty": "Date expression cannot be empty",
    "mcp.date.error.expression_empty_suggestion": "Provide a valid date expression, for example: this week, last 7 days, last week",
    "mcp.date.error.unrecognized_expression": "Unrecognized date expression: {expression}",
    "mcp.date.error.unrecognized_expression_suggestion": "Supported expressions:\nCN: {supported_cn}\nEN: {supported_en}",
    "mcp.date.desc.today": "Today",
    "mcp.date.desc.yesterday": "Yesterday",
    "mcp.date.desc.this_week": "This week (Mon-Sun, {start} to {end})",
    "mcp.date.desc.last_week": "Last week ({start} to {end})",
    "mcp.date.desc.this_month": "This month ({start} to {end})",
    "mcp.date.desc.last_month": "Last month ({start} to {end})",
    "mcp.date.desc.last_n_days": "Last {days} days ({start} to {end})",
    "mcp.date.desc.today_default": "Today (default)",
}

for p in paths:
    content = p.read_text(encoding="utf-8").rstrip()
    lines = []
    for k, v in entries.items():
        if f'"{k}": ' not in content:
            vv = v.replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'    "{k}": "{vv}",')

    if not lines:
        print(p.name, "added", 0)
        continue

    if content.endswith("}"):
        content = content[:-1].rstrip()
    if not content.endswith(","):
        content += ","

    content += "\n\n" + "\n".join(lines) + "\n}\n"
    p.write_text(content, encoding="utf-8")
    print(p.name, "added", len(lines))
