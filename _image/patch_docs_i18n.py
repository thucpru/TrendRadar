from pathlib import Path

path = Path("D:/AI/TrendRadar/docs/assets/i18n.js")
text = path.read_text(encoding="utf-8")

entries = {
    "vi-VN": {
        "docs.action.close": "Đóng",
        "docs.version.checking": "Đang kiểm tra...",
        "docs.version.error.fetch_failed": "Lấy thông tin phiên bản thất bại: {status}",
        "docs.version.error.file_not_found": "Không tìm thấy {file} trong danh sách phiên bản từ xa",
        "docs.version.error.check_failed_log": "Kiểm tra phiên bản thất bại:",
        "docs.version.error.check_failed": "Kiểm tra phiên bản thất bại: {error}",
        "docs.version.status.no_version": "Không phát hiện thông tin phiên bản",
        "docs.version.status.new_available": "Có phiên bản mới",
        "docs.version.status.current_newer": "Phiên bản hiện tại mới hơn (bản phát triển?)",
        "docs.version.status.latest": "Đã là phiên bản mới nhất",
        "docs.version.modal.title": "Kết quả kiểm tra phiên bản",
        "docs.version.label.file": "Tệp cấu hình",
        "docs.version.label.current": "Phiên bản hiện tại",
        "docs.version.label.latest": "Phiên bản mới nhất",
        "docs.version.label.unknown": "Không rõ",
        "docs.version.tip.title": "Gợi ý: ",
        "docs.version.tip.update_overwrite": "Cập nhật sẽ tải {file} mới nhất từ GitHub và ghi đè thay đổi hiện tại. Hãy sao chép cấu hình tùy chỉnh trước.",
        "docs.version.action.update_latest": "Cập nhật lên bản mới nhất",
        "docs.version.action.later": "Để sau",
        "docs.version.action.update_now": "Cập nhật ngay",
        "docs.timeline.new_preset.template_empty": "Mẫu trống (chỉ thu thập, không đẩy và không phân tích)",
        "docs.timeline.custom_name": "Tùy chỉnh",
        "docs.timeline.error.enter_preset_key": "Vui lòng nhập mã chế độ (key)",
        "docs.timeline.error.invalid_key_with_leading_rule": "Key chỉ hỗ trợ chữ cái, số, dấu gạch dưới và không được bắt đầu bằng số",
        "docs.timeline.error.enter_display_name": "Vui lòng nhập tên hiển thị",
        "docs.timeline.error.preset_exists": "Preset \"{key}\" đã tồn tại",
        "docs.timeline.error.custom_reserved": "Không thể dùng \"custom\" làm tên preset",
        "docs.timeline.toast.preset_created": "Đã tạo chế độ lịch \"{name}\"",
        "docs.timeline.error.enter_period_key": "Vui lòng nhập mã khung giờ (key)",
        "docs.timeline.error.invalid_key": "Key chỉ hỗ trợ chữ cái, số và dấu gạch dưới",
        "docs.timeline.error.set_start_end_time": "Vui lòng đặt thời gian bắt đầu và kết thúc",
        "docs.timeline.error.start_end_same": "Thời gian bắt đầu và kết thúc không được giống nhau",
        "docs.timeline.error.period_exists": "Khung giờ \"{key}\" đã tồn tại",
        "docs.timeline.error.preset_section_not_found": "Không tìm thấy phần cấu hình preset",
        "docs.timeline.error.periods_section_not_found": "Không tìm thấy phần cấu hình periods",
        "docs.timeline.toast.period_added": "Đã thêm khung giờ \"{name}\"",
        "docs.timeline.confirm.delete_period": "Bạn có chắc muốn xóa khung giờ \"{name}\"?",
        "docs.timeline.confirm.delete_period_with_refs": "\\n\\n⚠️ Khung giờ này đang được các day plan sau tham chiếu và sẽ bị gỡ cùng lúc:\\n{refs}",
        "docs.timeline.toast.period_deleted": "Đã xóa khung giờ \"{name}\"",
        "docs.timeline.suffix.copy": "(Bản sao)",
        "docs.timeline.toast.copied_as": "Đã sao chép thành \"{key}\"",
        "docs.timeline.error.protected_preset_delete": "Không thể xóa preset tích hợp sẵn, hãy dùng chức năng sao chép",
        "docs.timeline.error.custom_not_deletable": "Không thể xóa chế độ custom",
        "docs.timeline.confirm.delete_preset_irreversible": "Bạn có chắc muốn xóa chế độ lịch \"{name}\"?\\nThao tác này không thể hoàn tác.",
        "docs.timeline.toast.preset_deleted": "Đã xóa chế độ lịch \"{name}\"",
        "docs.timeline.prompt.enter_day_plan_key": "Nhập mã day plan (key), ví dụ: holiday",
        "docs.timeline.error.day_plan_exists": "Day plan \"{key}\" đã tồn tại",
        "docs.timeline.toast.day_plan_added": "Đã thêm day plan \"{key}\"",
        "docs.timeline.error.day_plan_in_use": "Không thể xóa: \"{key}\" đang được {refs} sử dụng. Hãy chỉnh week map trước.",
        "docs.timeline.confirm.delete_day_plan": "Bạn có chắc muốn xóa day plan \"{key}\"?",
        "docs.timeline.toast.day_plan_deleted": "Đã xóa day plan \"{key}\"",
        "docs.timeline.error.no_day_plans": "Không có day plan khả dụng",
        "docs.timeline.error.need_two_day_plans": "Cần ít nhất 2 day plan để tách ngày làm việc/cuối tuần",
        "docs.timeline.toast.week_map_updated": "Đã cập nhật week map",
        "docs.timeline.toast.switched_mode": "Đã chuyển sang chế độ \"{name}\""
    },
    "en": {
        "docs.action.close": "Close",
        "docs.version.checking": "Checking...",
        "docs.version.error.fetch_failed": "Failed to fetch version info: {status}",
        "docs.version.error.file_not_found": "File {file} was not found in remote version list",
        "docs.version.error.check_failed_log": "Version check failed:",
        "docs.version.error.check_failed": "Version check failed: {error}",
        "docs.version.status.no_version": "No version information detected",
        "docs.version.status.new_available": "New version available",
        "docs.version.status.current_newer": "Current version is newer (development build?)",
        "docs.version.status.latest": "Already the latest version",
        "docs.version.modal.title": "Version check result",
        "docs.version.label.file": "Config file",
        "docs.version.label.current": "Current version",
        "docs.version.label.latest": "Latest version",
        "docs.version.label.unknown": "Unknown",
        "docs.version.tip.title": "Tip: ",
        "docs.version.tip.update_overwrite": "Updating will load the latest {file} from GitHub and overwrite your current changes. Copy your custom config first.",
        "docs.version.action.update_latest": "Update to latest",
        "docs.version.action.later": "Later",
        "docs.version.action.update_now": "Update now",
        "docs.timeline.new_preset.template_empty": "Empty template (collect only, no push, no analysis)",
        "docs.timeline.custom_name": "Custom",
        "docs.timeline.error.enter_preset_key": "Please enter preset key",
        "docs.timeline.error.invalid_key_with_leading_rule": "Key only allows letters, numbers, and underscores, and cannot start with a number",
        "docs.timeline.error.enter_display_name": "Please enter display name",
        "docs.timeline.error.preset_exists": "Preset \"{key}\" already exists",
        "docs.timeline.error.custom_reserved": "Cannot use \"custom\" as preset name",
        "docs.timeline.toast.preset_created": "Schedule mode \"{name}\" created",
        "docs.timeline.error.enter_period_key": "Please enter period key",
        "docs.timeline.error.invalid_key": "Key only allows letters, numbers, and underscores",
        "docs.timeline.error.set_start_end_time": "Please set start and end time",
        "docs.timeline.error.start_end_same": "Start time and end time cannot be the same",
        "docs.timeline.error.period_exists": "Period \"{key}\" already exists",
        "docs.timeline.error.preset_section_not_found": "Preset config section not found",
        "docs.timeline.error.periods_section_not_found": "Periods section not found",
        "docs.timeline.toast.period_added": "Period \"{name}\" added",
        "docs.timeline.confirm.delete_period": "Delete period \"{name}\"?",
        "docs.timeline.confirm.delete_period_with_refs": "\\n\\n⚠️ This period is referenced by the following day plans and those references will be removed too:\\n{refs}",
        "docs.timeline.toast.period_deleted": "Period \"{name}\" deleted",
        "docs.timeline.suffix.copy": "(Copy)",
        "docs.timeline.toast.copied_as": "Copied as \"{key}\"",
        "docs.timeline.error.protected_preset_delete": "Built-in presets cannot be deleted. Use duplicate instead",
        "docs.timeline.error.custom_not_deletable": "Custom mode cannot be deleted",
        "docs.timeline.confirm.delete_preset_irreversible": "Delete schedule mode \"{name}\"?\\nThis action cannot be undone.",
        "docs.timeline.toast.preset_deleted": "Schedule mode \"{name}\" deleted",
        "docs.timeline.prompt.enter_day_plan_key": "Enter day plan key, e.g. holiday",
        "docs.timeline.error.day_plan_exists": "Day plan \"{key}\" already exists",
        "docs.timeline.toast.day_plan_added": "Day plan \"{key}\" added",
        "docs.timeline.error.day_plan_in_use": "Cannot delete: \"{key}\" is used by {refs}. Update week mapping first.",
        "docs.timeline.confirm.delete_day_plan": "Delete day plan \"{key}\"?",
        "docs.timeline.toast.day_plan_deleted": "Day plan \"{key}\" deleted",
        "docs.timeline.error.no_day_plans": "No available day plans",
        "docs.timeline.error.need_two_day_plans": "At least two day plans are required to split weekdays/weekends",
        "docs.timeline.toast.week_map_updated": "Week mapping updated",
        "docs.timeline.toast.switched_mode": "Switched to mode \"{name}\""
    },
    "zh-CN": {
        "docs.action.close": "关闭",
        "docs.version.checking": "检测中...",
        "docs.version.error.fetch_failed": "版本信息获取失败: {status}",
        "docs.version.error.file_not_found": "未在远程版本清单中找到 {file}",
        "docs.version.error.check_failed_log": "版本检测失败:",
        "docs.version.error.check_failed": "版本检测失败: {error}",
        "docs.version.status.no_version": "未检测到版本信息",
        "docs.version.status.new_available": "发现新版本",
        "docs.version.status.current_newer": "当前版本较新（开发版本？）",
        "docs.version.status.latest": "已是最新版本",
        "docs.version.modal.title": "版本检测结果",
        "docs.version.label.file": "配置文件",
        "docs.version.label.current": "当前版本",
        "docs.version.label.latest": "最新版本",
        "docs.version.label.unknown": "未知",
        "docs.version.tip.title": "提示：",
        "docs.version.tip.update_overwrite": "更新将从 GitHub 加载最新的 {file}，你当前的修改将被覆盖。建议先复制保存你的自定义配置。",
        "docs.version.action.update_latest": "更新到最新版本",
        "docs.version.action.later": "稍后更新",
        "docs.version.action.update_now": "立即更新",
        "docs.timeline.new_preset.template_empty": "空白模板（仅采集，不推送不分析）",
        "docs.timeline.custom_name": "自定义",
        "docs.timeline.error.enter_preset_key": "请输入模式标识 (key)",
        "docs.timeline.error.invalid_key_with_leading_rule": "key 仅支持英文、数字和下划线，且不能以数字开头",
        "docs.timeline.error.enter_display_name": "请输入显示名称",
        "docs.timeline.error.preset_exists": "预设「{key}」已存在",
        "docs.timeline.error.custom_reserved": "不能使用 \"custom\" 作为预设名",
        "docs.timeline.toast.preset_created": "调度模式「{name}」创建成功",
        "docs.timeline.error.enter_period_key": "请输入时间段标识 (key)",
        "docs.timeline.error.invalid_key": "key 仅支持英文、数字和下划线",
        "docs.timeline.error.set_start_end_time": "请设置开始和结束时间",
        "docs.timeline.error.start_end_same": "开始时间和结束时间不能相同",
        "docs.timeline.error.period_exists": "时间段「{key}」已存在",
        "docs.timeline.error.preset_section_not_found": "未找到预设配置段",
        "docs.timeline.error.periods_section_not_found": "未找到 periods 配置段",
        "docs.timeline.toast.period_added": "时间段「{name}」添加成功",
        "docs.timeline.confirm.delete_period": "确定删除时间段「{name}」？",
        "docs.timeline.confirm.delete_period_with_refs": "\\n\\n⚠️ 该时间段被以下日计划引用，将同时移除引用：\\n{refs}",
        "docs.timeline.toast.period_deleted": "时间段「{name}」已删除",
        "docs.timeline.suffix.copy": "(副本)",
        "docs.timeline.toast.copied_as": "已复制为「{key}」",
        "docs.timeline.error.protected_preset_delete": "内置预设不可删除，可使用复制功能",
        "docs.timeline.error.custom_not_deletable": "custom 模式不可删除",
        "docs.timeline.confirm.delete_preset_irreversible": "确定删除调度模式「{name}」？\\n此操作不可撤销。",
        "docs.timeline.toast.preset_deleted": "调度模式「{name}」已删除",
        "docs.timeline.prompt.enter_day_plan_key": "请输入日计划标识 (key)，如 holiday：",
        "docs.timeline.error.day_plan_exists": "日计划「{key}」已存在",
        "docs.timeline.toast.day_plan_added": "日计划「{key}」已添加",
        "docs.timeline.error.day_plan_in_use": "无法删除：「{key}」正在被 {refs} 使用。请先修改周映射。",
        "docs.timeline.confirm.delete_day_plan": "确定删除日计划「{key}」？",
        "docs.timeline.toast.day_plan_deleted": "日计划「{key}」已删除",
        "docs.timeline.error.no_day_plans": "没有可用的日计划",
        "docs.timeline.error.need_two_day_plans": "需要至少两个日计划来分离工作日/周末",
        "docs.timeline.toast.week_map_updated": "周映射已更新",
        "docs.timeline.toast.switched_mode": "已切换至「{name}」模式"
    }
}


def js_quote(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")


def find_object_bounds(src: str, marker: str):
    start = src.find(marker)
    if start < 0:
        raise ValueError(f"marker not found: {marker}")
    brace = src.find('{', start)
    if brace < 0:
        raise ValueError('opening brace not found')
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
    insertion = '\n' + '\n'.join(additions) + '\n'
    return src[:rbrace] + insertion + src[rbrace:]


out = text
out = add_entries(out, "'vi-VN': {", entries['vi-VN'])
out = add_entries(out, "en: {", entries['en'])
out = add_entries(out, "'zh-CN': {", entries['zh-CN'])

path.write_text(out, encoding='utf-8')
print('patched i18n.js')
