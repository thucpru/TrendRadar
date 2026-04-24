(function () {
  const STORAGE_KEY = 'trendradar_docs_locale';
  const DEFAULT_LOCALE = 'vi-VN';

  const ALIASES = {
    'vi': 'vi-VN',
    'vi_vn': 'vi-VN',
    'vi-vn': 'vi-VN',
    'en': 'en',
    'en_us': 'en',
    'en-us': 'en',
    'en_gb': 'en',
    'en-gb': 'en',
    'zh': 'zh-CN',
    'zh_cn': 'zh-CN',
    'zh-cn': 'zh-CN',
    'zh_hans': 'zh-CN',
    'zh-hans': 'zh-CN'
  };

  const CATALOGS = {
    'vi-VN': {
      'docs.page.title': 'Trình chỉnh sửa cấu hình TrendRadar',
      'docs.brand.editor': 'Trình chỉnh sửa cấu hình trực quan',
      'docs.banner.static_local': 'Trang tĩnh, dữ liệu chỉ lưu trong trình duyệt cục bộ của bạn',
      'docs.action.load_latest': 'Tải cấu hình mới nhất',
      'docs.action.copy_config': 'Sao chép cấu hình',
      'docs.action.check_version': 'Kiểm tra phiên bản',
      'docs.action.check_version_config': 'Kiểm tra phiên bản config.yaml',
      'docs.action.check_version_frequency': 'Kiểm tra phiên bản frequency_words.txt',
      'docs.action.delete': 'Xóa',
      'docs.action.duplicate': 'Nhân bản',
      'docs.action.cancel': 'Hủy',
      'docs.action.add': 'Thêm',
      'docs.action.create': 'Tạo',
      'docs.action.reset_current': 'Đặt lại nội dung hiện tại về mặc định',
      'docs.action.copied': 'Đã sao chép!',
      'docs.action.jump_to_module': 'Đi tới mô-đun {id}',
      'docs.action.collapse_sidebar': 'Thu gọn thanh bên',
      'docs.action.expand_sidebar': 'Mở rộng thanh bên',

      'docs.tab.config': 'config.yaml',
      'docs.tab.frequency': 'frequency_words.txt',
      'docs.tab.timeline': 'timeline.yaml',

      'docs.time.saved_label': 'Đã lưu:',
      'docs.time.unsaved': 'Chưa lưu',
      'docs.time.just_now': 'Vừa xong',
      'docs.time.minutes_ago': '{count} phút trước',
      'docs.time.hours_ago': '{count} giờ trước',
      'docs.time.days_ago': '{count} ngày trước',

      'docs.panel.config_modules': 'Mô-đun cấu hình',
      'docs.panel.frequency_editor': 'Trình chỉnh từ khóa tần suất',
      'docs.panel.timeline_scheduler': 'Lập lịch timeline',

      'docs.module.app': '1. Cài đặt cơ bản',
      'docs.module.platforms': '2. Nguồn dữ liệu - Nền tảng hotlist',
      'docs.module.rss': '3. Nguồn dữ liệu - Đăng ký RSS',
      'docs.module.report': '4. Chế độ báo cáo',
      'docs.module.filter': '4.5 Chiến lược lọc',
      'docs.module.ai_filter': '4.6 Lọc thông minh AI',
      'docs.module.display': '5. Kiểm soát nội dung đẩy',
      'docs.module.notification': '6. Thông báo đẩy',
      'docs.module.storage': '7. Cấu hình lưu trữ',
      'docs.module.ai': '8. Cấu hình mô hình AI',
      'docs.module.ai_analysis': '9. Chức năng phân tích AI',
      'docs.module.ai_translation': '10. Chức năng dịch AI',
      'docs.module.advanced': '11. Cài đặt nâng cao',

      'docs.badge.read_only_edit_left': 'Chỉ đọc (hãy sửa ở panel trái)',
      'docs.badge.recommended': 'Khuyến nghị',
      'docs.input.unset': 'Chưa đặt',

      'docs.editor.initial_config_line1': '# Dán config.yaml của bạn tại đây...',
      'docs.editor.initial_config_line2': '# hoặc kéo thả tệp vào khu vực trình chỉnh sửa',
      'docs.editor.initial_config_line3': '# hoặc nhấn "Tải cấu hình mới nhất" ở góc trên phải',
      'docs.editor.initial_frequency_line1': '# Dán nội dung frequency_words.txt tại đây...',
      'docs.editor.initial_frequency_line2': '# hoặc kéo thả tệp vào khu vực trình chỉnh sửa',
      'docs.editor.initial_timeline_line1': '# Dán timeline.yaml của bạn tại đây...',
      'docs.editor.initial_timeline_line2': '# hoặc kéo thả tệp vào khu vực trình chỉnh sửa',
      'docs.editor.initial_timeline_line3': '# hoặc nhấn "Tải cấu hình mới nhất" ở góc trên phải',

      'docs.drop.release_to_load': 'Thả để tải tệp',

      'docs.toast.restore_saved_config': 'Đã khôi phục cấu hình đã lưu lần trước',
      'docs.toast.manual_saved': 'Đã lưu thủ công cấu hình',
      'docs.toast.drop_file_type': 'Vui lòng kéo thả tệp {type}',
      'docs.toast.loaded_file': 'Đã tải: {file}',
      'docs.toast.loaded_files': 'Đã tải: {files}',
      'docs.toast.yaml_error': 'Lỗi cú pháp YAML: {error}',
      'docs.toast.file_read_failed': 'Đọc tệp thất bại',
      'docs.toast.select_at_least_one_file': 'Hãy chọn ít nhất một tệp',
      'docs.toast.loading_from_github': 'Đang tải từ GitHub...',
      'docs.toast.loading_latest_from_github': 'Đang tải phiên bản mới nhất từ GitHub...',
      'docs.toast.reset_done': 'Đã đặt lại về trạng thái ban đầu',
      'docs.toast.platform_added': 'Đã thêm nền tảng {name}',
      'docs.toast.updated_to_latest': 'Đã cập nhật lên phiên bản mới nhất',

      'docs.error.load_file_failed': 'Tải {file} thất bại: {status}',
      'docs.error.load_failed': 'Tải thất bại: {error}',
      'docs.error.load_status': 'Tải thất bại: {status}',
      'docs.error.update_failed': 'Cập nhật thất bại: {error}',

      'docs.alert.input_platform_key': 'Vui lòng nhập Platform Key',
      'docs.alert.select_platform_from_list': 'Hãy chọn trực tiếp nền tảng từ danh sách phía trên',
      'docs.alert.platform_exists': 'Nền tảng {key} đã tồn tại!',

      'docs.confirm.reset_default': 'Bạn có chắc muốn đặt lại về trạng thái ban đầu? Thay đổi chưa lưu sẽ bị mất.',
      'docs.confirm.delete_platform': 'Bạn có chắc muốn xóa nền tảng "{name}" không?',
      'docs.confirm.update_latest': 'Bạn có chắc muốn cập nhật {file} từ GitHub lên bản mới nhất?\n\nCấu hình tùy chỉnh hiện tại sẽ bị ghi đè, nên sao chép lưu trước.',

      'docs.modal.load_latest.title': 'Tải cấu hình mới nhất',
      'docs.modal.load_latest.select_files': 'Chọn tệp cấu hình cần tải từ GitHub:',
      'docs.modal.load_latest.config_desc': 'Cấu hình hệ thống, nền tảng, AI, thông báo...',
      'docs.modal.load_latest.frequency_desc': 'Nhóm từ khóa, quy tắc lọc, logic regex',
      'docs.modal.load_latest.timeline_desc': 'Timeline lịch, mẫu preset, khoảng thời gian tùy chỉnh',
      'docs.modal.load_latest.source_prefix': 'Nguồn dữ liệu: ',
      'docs.modal.load_latest.load_selected': 'Tải mục đã chọn',

      'docs.sidebar.support_project': 'Hỗ trợ dự án',
      'docs.sidebar.quote': 'Nếu TrendRadar đã giúp bạn bắt được giá trị, hãy tiếp thêm động lực để nó tiếp tục tiến hóa',
      'docs.sidebar.star.title': 'Tặng Star',
      'docs.sidebar.star.desc': 'Giúp nhiều người biết đến hơn',
      'docs.sidebar.star.cta': 'Mở GitHub',
      'docs.sidebar.weixin.title': 'Theo dõi để không lạc tin',
      'docs.sidebar.weixin.desc': 'Nhận thông báo cập nhật',
      'docs.sidebar.enlarge': 'Bấm để phóng to',
      'docs.sidebar.scan_weixin': 'Quét mã theo dõi公众号',
      'docs.sidebar.donate.title': 'Ủng hộ tùy tâm',
      'docs.sidebar.donate.desc': '1 tệ cũng là động viên',
      'docs.sidebar.scan_donate': 'Quét mã WeChat · tùy tâm',
      'docs.sidebar.more.title': 'Khám phá thêm',
      'docs.sidebar.more.desc': 'Một sản phẩm tâm huyết khác',
      'docs.sidebar.more.cta': 'Xem thử',
      'docs.sidebar.footer_quote': '"Làm mã nguồn mở không dễ, cảm ơn bạn đã ủng hộ"',

      'docs.support.weixin.title': 'Theo dõi để không lạc tin',
      'docs.support.weixin.subtitle': 'Nhận cập nhật sớm nhất',
      'docs.support.weixin.alt': 'Tài khoản WeChat chính thức',
      'docs.support.weixin.hint': 'Quét mã WeChat để theo dõi',
      'docs.support.donate.title': 'Ủng hộ tùy tâm',
      'docs.support.donate.subtitle': 'Số tiền tùy ý, 1 tệ cũng là động viên (´▽`ʃ♡ƪ)',
      'docs.support.donate.alt': 'Thanh toán WeChat',
      'docs.support.donate.hint': 'Quét mã WeChat · tùy tâm',

      'docs.platform.none': 'Chưa có nền tảng, hãy thêm mới',

      'docs.timeline.empty.paste_left': 'Hãy dán nội dung timeline.yaml vào panel trái',
      'docs.timeline.empty.load_latest': 'hoặc nhấn "Tải cấu hình mới nhất" ở góc trên phải',
      'docs.timeline.section.schedule_mode': 'Chế độ lịch',

      'docs.day.monday': 'Thứ Hai',
      'docs.day.tuesday': 'Thứ Ba',
      'docs.day.wednesday': 'Thứ Tư',
      'docs.day.thursday': 'Thứ Năm',
      'docs.day.friday': 'Thứ Sáu',
      'docs.day.saturday': 'Thứ Bảy',
      'docs.day.sunday': 'Chủ Nhật'
    
      'docs.action.close': 'Đóng',
      'docs.version.checking': 'Đang kiểm tra...',
      'docs.version.error.fetch_failed': 'Lấy thông tin phiên bản thất bại: {status}',
      'docs.version.error.file_not_found': 'Không tìm thấy {file} trong danh sách phiên bản từ xa',
      'docs.version.error.check_failed_log': 'Kiểm tra phiên bản thất bại:',
      'docs.version.error.check_failed': 'Kiểm tra phiên bản thất bại: {error}',
      'docs.version.status.no_version': 'Không phát hiện thông tin phiên bản',
      'docs.version.status.new_available': 'Có phiên bản mới',
      'docs.version.status.current_newer': 'Phiên bản hiện tại mới hơn (bản phát triển?)',
      'docs.version.status.latest': 'Đã là phiên bản mới nhất',
      'docs.version.modal.title': 'Kết quả kiểm tra phiên bản',
      'docs.version.label.file': 'Tệp cấu hình',
      'docs.version.label.current': 'Phiên bản hiện tại',
      'docs.version.label.latest': 'Phiên bản mới nhất',
      'docs.version.label.unknown': 'Không rõ',
      'docs.version.tip.title': 'Gợi ý: ',
      'docs.version.tip.update_overwrite': 'Cập nhật sẽ tải {file} mới nhất từ GitHub và ghi đè thay đổi hiện tại. Hãy sao chép cấu hình tùy chỉnh trước.',
      'docs.version.action.update_latest': 'Cập nhật lên bản mới nhất',
      'docs.version.action.later': 'Để sau',
      'docs.version.action.update_now': 'Cập nhật ngay',
      'docs.timeline.new_preset.template_empty': 'Mẫu trống (chỉ thu thập, không đẩy và không phân tích)',
      'docs.timeline.custom_name': 'Tùy chỉnh',
      'docs.timeline.error.enter_preset_key': 'Vui lòng nhập mã chế độ (key)',
      'docs.timeline.error.invalid_key_with_leading_rule': 'Key chỉ hỗ trợ chữ cái, số, dấu gạch dưới và không được bắt đầu bằng số',
      'docs.timeline.error.enter_display_name': 'Vui lòng nhập tên hiển thị',
      'docs.timeline.error.preset_exists': 'Preset "{key}" đã tồn tại',
      'docs.timeline.error.custom_reserved': 'Không thể dùng "custom" làm tên preset',
      'docs.timeline.toast.preset_created': 'Đã tạo chế độ lịch "{name}"',
      'docs.timeline.error.enter_period_key': 'Vui lòng nhập mã khung giờ (key)',
      'docs.timeline.error.invalid_key': 'Key chỉ hỗ trợ chữ cái, số và dấu gạch dưới',
      'docs.timeline.error.set_start_end_time': 'Vui lòng đặt thời gian bắt đầu và kết thúc',
      'docs.timeline.error.start_end_same': 'Thời gian bắt đầu và kết thúc không được giống nhau',
      'docs.timeline.error.period_exists': 'Khung giờ "{key}" đã tồn tại',
      'docs.timeline.error.preset_section_not_found': 'Không tìm thấy phần cấu hình preset',
      'docs.timeline.error.periods_section_not_found': 'Không tìm thấy phần cấu hình periods',
      'docs.timeline.toast.period_added': 'Đã thêm khung giờ "{name}"',
      'docs.timeline.confirm.delete_period': 'Bạn có chắc muốn xóa khung giờ "{name}"?',
      'docs.timeline.confirm.delete_period_with_refs': '\\n\\n⚠️ Khung giờ này đang được các day plan sau tham chiếu và sẽ bị gỡ cùng lúc:\\n{refs}',
      'docs.timeline.toast.period_deleted': 'Đã xóa khung giờ "{name}"',
      'docs.timeline.suffix.copy': '(Bản sao)',
      'docs.timeline.toast.copied_as': 'Đã sao chép thành "{key}"',
      'docs.timeline.error.protected_preset_delete': 'Không thể xóa preset tích hợp sẵn, hãy dùng chức năng sao chép',
      'docs.timeline.error.custom_not_deletable': 'Không thể xóa chế độ custom',
      'docs.timeline.confirm.delete_preset_irreversible': 'Bạn có chắc muốn xóa chế độ lịch "{name}"?\\nThao tác này không thể hoàn tác.',
      'docs.timeline.toast.preset_deleted': 'Đã xóa chế độ lịch "{name}"',
      'docs.timeline.prompt.enter_day_plan_key': 'Nhập mã day plan (key), ví dụ: holiday',
      'docs.timeline.error.day_plan_exists': 'Day plan "{key}" đã tồn tại',
      'docs.timeline.toast.day_plan_added': 'Đã thêm day plan "{key}"',
      'docs.timeline.error.day_plan_in_use': 'Không thể xóa: "{key}" đang được {refs} sử dụng. Hãy chỉnh week map trước.',
      'docs.timeline.confirm.delete_day_plan': 'Bạn có chắc muốn xóa day plan "{key}"?',
      'docs.timeline.toast.day_plan_deleted': 'Đã xóa day plan "{key}"',
      'docs.timeline.error.no_day_plans': 'Không có day plan khả dụng',
      'docs.timeline.error.need_two_day_plans': 'Cần ít nhất 2 day plan để tách ngày làm việc/cuối tuần',
      'docs.timeline.toast.week_map_updated': 'Đã cập nhật week map',
      'docs.timeline.toast.switched_mode': 'Đã chuyển sang chế độ "{name}"',

      'docs.action.remove': 'Gỡ',
      'docs.timeline.action.delete_day_plan': 'Xóa day plan',
      'docs.timeline.empty.day_plan_uses_default': 'Trống (cả ngày dùng default)',
      'docs.timeline.hint.filter_method_default': 'Để trống để theo filter.method toàn cục',
      'docs.timeline.hint.filter_method_inherit': 'Để trống để kế thừa default (sau đó fallback toàn cục)',
      'docs.timeline.label.day_plan': 'Day plan',
      'docs.timeline.label.mode': 'Chế độ',
      'docs.timeline.legend.analyze': 'Phân tích',
      'docs.timeline.legend.collect_only': 'Chỉ thu thập',
      'docs.timeline.legend.default': 'Mặc định (default)',
      'docs.timeline.legend.push': 'Đẩy',
      'docs.timeline.legend.push_analyze': 'Đẩy + phân tích',
      'docs.timeline.option.inherit': 'Kế thừa',
      'docs.timeline.section.day_plans': 'Day plans',
      'docs.timeline.section.filter_override_optional': 'Filter override (tùy chọn)',
      'docs.timeline.section.periods': 'Khung giờ (Periods)',
      'docs.timeline.section.week_map': 'Week map',
      'docs.timeline.section.week_view': 'Week view',
      'docs.timeline.status.current': 'Hiện tại',
      'docs.timeline.tooltip.current_time': 'Thời gian hiện tại {time}',
      'docs.timeline.tooltip.uses_default': 'Dùng cấu hình default',
      'docs.timeline.unset': '(chưa đặt)',
},

    en: {
      'docs.page.title': 'TrendRadar Config Editor',
      'docs.brand.editor': 'Visual Config Editor',
      'docs.banner.static_local': 'Static page; data is stored only in your local browser',
      'docs.action.load_latest': 'Load latest config',
      'docs.action.copy_config': 'Copy config',
      'docs.action.check_version': 'Check version',
      'docs.action.check_version_config': 'Check config.yaml version',
      'docs.action.check_version_frequency': 'Check frequency_words.txt version',
      'docs.action.delete': 'Delete',
      'docs.action.duplicate': 'Duplicate',
      'docs.action.cancel': 'Cancel',
      'docs.action.add': 'Add',
      'docs.action.create': 'Create',
      'docs.action.reset_current': 'Reset current content to default',
      'docs.action.copied': 'Copied!',
      'docs.action.jump_to_module': 'Jump to module {id}',
      'docs.action.collapse_sidebar': 'Collapse sidebar',
      'docs.action.expand_sidebar': 'Expand sidebar',

      'docs.tab.config': 'config.yaml',
      'docs.tab.frequency': 'frequency_words.txt',
      'docs.tab.timeline': 'timeline.yaml',

      'docs.time.saved_label': 'Saved:',
      'docs.time.unsaved': 'Unsaved',
      'docs.time.just_now': 'Just now',
      'docs.time.minutes_ago': '{count} minutes ago',
      'docs.time.hours_ago': '{count} hours ago',
      'docs.time.days_ago': '{count} days ago',

      'docs.panel.config_modules': 'Config Modules',
      'docs.panel.frequency_editor': 'Frequency Word Editor',
      'docs.panel.timeline_scheduler': 'Timeline Scheduler',

      'docs.module.app': '1. Basic Settings',
      'docs.module.platforms': '2. Data Sources - Hot Platforms',
      'docs.module.rss': '3. Data Sources - RSS Subscriptions',
      'docs.module.report': '4. Report Mode',
      'docs.module.filter': '4.5 Filter Strategy',
      'docs.module.ai_filter': '4.6 AI Smart Filter',
      'docs.module.display': '5. Push Content Control',
      'docs.module.notification': '6. Push Notifications',
      'docs.module.storage': '7. Storage Settings',
      'docs.module.ai': '8. AI Model Settings',
      'docs.module.ai_analysis': '9. AI Analysis',
      'docs.module.ai_translation': '10. AI Translation',
      'docs.module.advanced': '11. Advanced Settings',

      'docs.badge.read_only_edit_left': 'Read-only (edit on the left)',
      'docs.badge.recommended': 'Recommended',
      'docs.input.unset': 'Not set',

      'docs.editor.initial_config_line1': '# Paste your config.yaml here...',
      'docs.editor.initial_config_line2': '# or drag and drop a file into the editor area',
      'docs.editor.initial_config_line3': '# or click "Load latest config" at the top-right',
      'docs.editor.initial_frequency_line1': '# Paste your frequency_words.txt content here...',
      'docs.editor.initial_frequency_line2': '# or drag and drop a file into the editor area',
      'docs.editor.initial_timeline_line1': '# Paste your timeline.yaml here...',
      'docs.editor.initial_timeline_line2': '# or drag and drop a file into the editor area',
      'docs.editor.initial_timeline_line3': '# or click "Load latest config" at the top-right',

      'docs.drop.release_to_load': 'Release to load file',

      'docs.toast.restore_saved_config': 'Restored previously saved config',
      'docs.toast.manual_saved': 'Config saved manually',
      'docs.toast.drop_file_type': 'Please drop a {type} file',
      'docs.toast.loaded_file': 'Loaded: {file}',
      'docs.toast.loaded_files': 'Loaded: {files}',
      'docs.toast.yaml_error': 'YAML syntax error: {error}',
      'docs.toast.file_read_failed': 'Failed to read file',
      'docs.toast.select_at_least_one_file': 'Please select at least one file',
      'docs.toast.loading_from_github': 'Loading from GitHub...',
      'docs.toast.loading_latest_from_github': 'Loading latest version from GitHub...',
      'docs.toast.reset_done': 'Reset to initial state',
      'docs.toast.platform_added': 'Platform {name} added',
      'docs.toast.updated_to_latest': 'Updated to latest version',

      'docs.error.load_file_failed': 'Failed to load {file}: {status}',
      'docs.error.load_failed': 'Load failed: {error}',
      'docs.error.load_status': 'Load failed: {status}',
      'docs.error.update_failed': 'Update failed: {error}',

      'docs.alert.input_platform_key': 'Please enter platform key',
      'docs.alert.select_platform_from_list': 'Please click a platform from the list above',
      'docs.alert.platform_exists': 'Platform {key} already exists!',

      'docs.confirm.reset_default': 'Reset to initial state? Unsaved changes will be lost.',
      'docs.confirm.delete_platform': 'Delete platform "{name}"?',
      'docs.confirm.update_latest': 'Update {file} from GitHub to latest?\n\nYour custom config will be overwritten. Please copy and save it first.',

      'docs.modal.load_latest.title': 'Load latest config',
      'docs.modal.load_latest.select_files': 'Select config files to load from GitHub:',
      'docs.modal.load_latest.config_desc': 'System config, platforms, AI, notifications, etc.',
      'docs.modal.load_latest.frequency_desc': 'Keyword groups, filter rules, regex logic',
      'docs.modal.load_latest.timeline_desc': 'Timeline schedule, preset templates, custom periods',
      'docs.modal.load_latest.source_prefix': 'Data source: ',
      'docs.modal.load_latest.load_selected': 'Load selected',

      'docs.sidebar.support_project': 'Support the project',
      'docs.sidebar.quote': 'If TrendRadar has helped you capture value, support it to keep evolving',
      'docs.sidebar.star.title': 'Give a Star',
      'docs.sidebar.star.desc': 'Help more people discover it',
      'docs.sidebar.star.cta': 'Go to GitHub',
      'docs.sidebar.weixin.title': 'Stay updated',
      'docs.sidebar.weixin.desc': 'Get update notifications',
      'docs.sidebar.enlarge': 'Click to enlarge',
      'docs.sidebar.scan_weixin': 'Scan to follow',
      'docs.sidebar.donate.title': 'Donate freely',
      'docs.sidebar.donate.desc': 'Even 1 CNY helps',
      'docs.sidebar.scan_donate': 'WeChat scan · any amount',
      'docs.sidebar.more.title': 'Explore more',
      'docs.sidebar.more.desc': 'Another thoughtfully built project',
      'docs.sidebar.more.cta': 'Take a look',
      'docs.sidebar.footer_quote': '"Open source is hard. Thanks for your support."',

      'docs.support.weixin.title': 'Stay updated',
      'docs.support.weixin.subtitle': 'Get updates as soon as they are published',
      'docs.support.weixin.alt': 'WeChat Official Account',
      'docs.support.weixin.hint': 'Scan WeChat QR to follow',
      'docs.support.donate.title': 'Donate freely',
      'docs.support.donate.subtitle': 'Any amount is appreciated, even 1 CNY (´▽`ʃ♡ƪ)',
      'docs.support.donate.alt': 'WeChat Pay',
      'docs.support.donate.hint': 'WeChat scan · any amount',

      'docs.platform.none': 'No platforms yet, please add one',

      'docs.timeline.empty.paste_left': 'Paste timeline.yaml content on the left side',
      'docs.timeline.empty.load_latest': 'or click "Load latest config" in the top-right',
      'docs.timeline.section.schedule_mode': 'Schedule mode',

      'docs.day.monday': 'Mon',
      'docs.day.tuesday': 'Tue',
      'docs.day.wednesday': 'Wed',
      'docs.day.thursday': 'Thu',
      'docs.day.friday': 'Fri',
      'docs.day.saturday': 'Sat',
      'docs.day.sunday': 'Sun'
    
      'docs.action.close': 'Close',
      'docs.version.checking': 'Checking...',
      'docs.version.error.fetch_failed': 'Failed to fetch version info: {status}',
      'docs.version.error.file_not_found': 'File {file} was not found in remote version list',
      'docs.version.error.check_failed_log': 'Version check failed:',
      'docs.version.error.check_failed': 'Version check failed: {error}',
      'docs.version.status.no_version': 'No version information detected',
      'docs.version.status.new_available': 'New version available',
      'docs.version.status.current_newer': 'Current version is newer (development build?)',
      'docs.version.status.latest': 'Already the latest version',
      'docs.version.modal.title': 'Version check result',
      'docs.version.label.file': 'Config file',
      'docs.version.label.current': 'Current version',
      'docs.version.label.latest': 'Latest version',
      'docs.version.label.unknown': 'Unknown',
      'docs.version.tip.title': 'Tip: ',
      'docs.version.tip.update_overwrite': 'Updating will load the latest {file} from GitHub and overwrite your current changes. Copy your custom config first.',
      'docs.version.action.update_latest': 'Update to latest',
      'docs.version.action.later': 'Later',
      'docs.version.action.update_now': 'Update now',
      'docs.timeline.new_preset.template_empty': 'Empty template (collect only, no push, no analysis)',
      'docs.timeline.custom_name': 'Custom',
      'docs.timeline.error.enter_preset_key': 'Please enter preset key',
      'docs.timeline.error.invalid_key_with_leading_rule': 'Key only allows letters, numbers, and underscores, and cannot start with a number',
      'docs.timeline.error.enter_display_name': 'Please enter display name',
      'docs.timeline.error.preset_exists': 'Preset "{key}" already exists',
      'docs.timeline.error.custom_reserved': 'Cannot use "custom" as preset name',
      'docs.timeline.toast.preset_created': 'Schedule mode "{name}" created',
      'docs.timeline.error.enter_period_key': 'Please enter period key',
      'docs.timeline.error.invalid_key': 'Key only allows letters, numbers, and underscores',
      'docs.timeline.error.set_start_end_time': 'Please set start and end time',
      'docs.timeline.error.start_end_same': 'Start time and end time cannot be the same',
      'docs.timeline.error.period_exists': 'Period "{key}" already exists',
      'docs.timeline.error.preset_section_not_found': 'Preset config section not found',
      'docs.timeline.error.periods_section_not_found': 'Periods section not found',
      'docs.timeline.toast.period_added': 'Period "{name}" added',
      'docs.timeline.confirm.delete_period': 'Delete period "{name}"?',
      'docs.timeline.confirm.delete_period_with_refs': '\\n\\n⚠️ This period is referenced by the following day plans and those references will be removed too:\\n{refs}',
      'docs.timeline.toast.period_deleted': 'Period "{name}" deleted',
      'docs.timeline.suffix.copy': '(Copy)',
      'docs.timeline.toast.copied_as': 'Copied as "{key}"',
      'docs.timeline.error.protected_preset_delete': 'Built-in presets cannot be deleted. Use duplicate instead',
      'docs.timeline.error.custom_not_deletable': 'Custom mode cannot be deleted',
      'docs.timeline.confirm.delete_preset_irreversible': 'Delete schedule mode "{name}"?\\nThis action cannot be undone.',
      'docs.timeline.toast.preset_deleted': 'Schedule mode "{name}" deleted',
      'docs.timeline.prompt.enter_day_plan_key': 'Enter day plan key, e.g. holiday',
      'docs.timeline.error.day_plan_exists': 'Day plan "{key}" already exists',
      'docs.timeline.toast.day_plan_added': 'Day plan "{key}" added',
      'docs.timeline.error.day_plan_in_use': 'Cannot delete: "{key}" is used by {refs}. Update week mapping first.',
      'docs.timeline.confirm.delete_day_plan': 'Delete day plan "{key}"?',
      'docs.timeline.toast.day_plan_deleted': 'Day plan "{key}" deleted',
      'docs.timeline.error.no_day_plans': 'No available day plans',
      'docs.timeline.error.need_two_day_plans': 'At least two day plans are required to split weekdays/weekends',
      'docs.timeline.toast.week_map_updated': 'Week mapping updated',
      'docs.timeline.toast.switched_mode': 'Switched to mode "{name}"',

      'docs.action.remove': 'Remove',
      'docs.timeline.action.delete_day_plan': 'Delete day plan',
      'docs.timeline.empty.day_plan_uses_default': 'Empty (use default all day)',
      'docs.timeline.hint.filter_method_default': 'Leave empty to follow global filter.method',
      'docs.timeline.hint.filter_method_inherit': 'Leave empty to inherit from default (then fallback to global)',
      'docs.timeline.label.day_plan': 'Day plan',
      'docs.timeline.label.mode': 'Mode',
      'docs.timeline.legend.analyze': 'Analyze',
      'docs.timeline.legend.collect_only': 'Collect only',
      'docs.timeline.legend.default': 'Default (default)',
      'docs.timeline.legend.push': 'Push',
      'docs.timeline.legend.push_analyze': 'Push + analyze',
      'docs.timeline.option.inherit': 'Inherit',
      'docs.timeline.section.day_plans': 'Day plans',
      'docs.timeline.section.filter_override_optional': 'Filter override (optional)',
      'docs.timeline.section.periods': 'Periods',
      'docs.timeline.section.week_map': 'Week map',
      'docs.timeline.section.week_view': 'Week view',
      'docs.timeline.status.current': 'Current',
      'docs.timeline.tooltip.current_time': 'Current time {time}',
      'docs.timeline.tooltip.uses_default': 'Using default configuration',
      'docs.timeline.unset': '(unset)',
},

    'zh-CN': {
      'docs.page.title': 'TrendRadar 配置文件编辑器',
      'docs.brand.editor': '可视化配置编辑器',
      'docs.banner.static_local': '纯静态页面，数据仅保存在你的本地浏览器，请放心使用',
      'docs.action.load_latest': '加载官网最新配置',
      'docs.action.copy_config': '复制配置',
      'docs.action.check_version': '版本检测',
      'docs.action.check_version_config': '检测 config.yaml 版本',
      'docs.action.check_version_frequency': '检测 frequency_words.txt 版本',
      'docs.action.delete': '删除',
      'docs.action.duplicate': '复制',
      'docs.action.cancel': '取消',
      'docs.action.add': '添加',
      'docs.action.create': '创建',
      'docs.action.reset_current': '重置当前内容为默认状态',
      'docs.action.copied': '已复制!',
      'docs.action.jump_to_module': '跳转到模块 {id}',
      'docs.action.collapse_sidebar': '收起侧栏',
      'docs.action.expand_sidebar': '展开侧栏',

      'docs.tab.config': 'config.yaml',
      'docs.tab.frequency': 'frequency_words.txt',
      'docs.tab.timeline': 'timeline.yaml',

      'docs.time.saved_label': '已保存:',
      'docs.time.unsaved': '未保存',
      'docs.time.just_now': '刚刚',
      'docs.time.minutes_ago': '{count} 分钟前',
      'docs.time.hours_ago': '{count} 小时前',
      'docs.time.days_ago': '{count} 天前',

      'docs.panel.config_modules': '配置模块',
      'docs.panel.frequency_editor': '频率词编辑',
      'docs.panel.timeline_scheduler': '时间线调度',

      'docs.module.app': '1. 基础设置',
      'docs.module.platforms': '2. 数据源 - 热榜平台',
      'docs.module.rss': '3. 数据源 - RSS 订阅',
      'docs.module.report': '4. 报告模式',
      'docs.module.filter': '4.5 筛选策略',
      'docs.module.ai_filter': '4.6 AI 智能筛选',
      'docs.module.display': '5. 推送内容控制',
      'docs.module.notification': '6. 推送通知',
      'docs.module.storage': '7. 存储配置',
      'docs.module.ai': '8. AI 模型配置',
      'docs.module.ai_analysis': '9. AI 分析功能',
      'docs.module.ai_translation': '10. AI 翻译功能',
      'docs.module.advanced': '11. 高级设置',

      'docs.badge.read_only_edit_left': '只读 (请在左侧编辑)',
      'docs.badge.recommended': '推荐',
      'docs.input.unset': '未设置',

      'docs.editor.initial_config_line1': '# 在此粘贴你的 config.yaml...',
      'docs.editor.initial_config_line2': '# 或拖拽文件到编辑器区域',
      'docs.editor.initial_config_line3': '# 或点击右上角"加载官网最新配置"',
      'docs.editor.initial_frequency_line1': '# 在此粘贴你的 frequency_words.txt 内容...',
      'docs.editor.initial_frequency_line2': '# 或拖拽文件到编辑器区域',
      'docs.editor.initial_timeline_line1': '# 在此粘贴你的 timeline.yaml...',
      'docs.editor.initial_timeline_line2': '# 或拖拽文件到编辑器区域',
      'docs.editor.initial_timeline_line3': '# 或点击右上角"加载官网最新配置"',

      'docs.drop.release_to_load': '释放以加载文件',

      'docs.toast.restore_saved_config': '已恢复上次保存的配置',
      'docs.toast.manual_saved': '已手动保存配置',
      'docs.toast.drop_file_type': '请拖入 {type} 文件',
      'docs.toast.loaded_file': '已加载: {file}',
      'docs.toast.loaded_files': '已加载: {files}',
      'docs.toast.yaml_error': 'YAML 语法错误: {error}',
      'docs.toast.file_read_failed': '文件读取失败',
      'docs.toast.select_at_least_one_file': '请至少选择一个文件',
      'docs.toast.loading_from_github': '正在从 GitHub 加载...',
      'docs.toast.loading_latest_from_github': '正在从 GitHub 加载最新版本...',
      'docs.toast.reset_done': '已重置为初始状态',
      'docs.toast.platform_added': '平台 {name} 已添加',
      'docs.toast.updated_to_latest': '已更新到最新版本',

      'docs.error.load_file_failed': '{file} 加载失败: {status}',
      'docs.error.load_failed': '加载失败: {error}',
      'docs.error.load_status': '加载失败: {status}',
      'docs.error.update_failed': '更新失败: {error}',

      'docs.alert.input_platform_key': '请输入平台 Key',
      'docs.alert.select_platform_from_list': '请直接点击上方列表中的平台进行添加',
      'docs.alert.platform_exists': '平台 {key} 已存在！',

      'docs.confirm.reset_default': '确定要重置为初始状态吗？未保存的修改将丢失。',
      'docs.confirm.delete_platform': '确定要删除平台 "{name}" 吗？',
      'docs.confirm.update_latest': '确定要从 GitHub 更新 {file} 到最新版本吗？\n\n你当前的自定义配置将被覆盖，建议先复制保存。',

      'docs.modal.load_latest.title': '加载官网最新配置',
      'docs.modal.load_latest.select_files': '选择要从 GitHub 加载的配置文件：',
      'docs.modal.load_latest.config_desc': '系统配置、平台、AI、通知等',
      'docs.modal.load_latest.frequency_desc': '关键词组、过滤规则、正则逻辑',
      'docs.modal.load_latest.timeline_desc': '调度时间线、预设模板、自定义时间段',
      'docs.modal.load_latest.source_prefix': '数据来源：',
      'docs.modal.load_latest.load_selected': '加载选中',

      'docs.sidebar.support_project': '支持项目',
      'docs.sidebar.quote': '若 TrendRadar 曾为你捕捉价值，不妨为它注入动力，助其持续进化',
      'docs.sidebar.star.title': '点亮 Star',
      'docs.sidebar.star.desc': '让更多人发现它',
      'docs.sidebar.star.cta': '前往 GitHub',
      'docs.sidebar.weixin.title': '不迷路',
      'docs.sidebar.weixin.desc': '获取更新通知',
      'docs.sidebar.enlarge': '点击放大',
      'docs.sidebar.scan_weixin': '扫码关注公众号',
      'docs.sidebar.donate.title': '随心赞赏',
      'docs.sidebar.donate.desc': '1 元也是鼓励',
      'docs.sidebar.scan_donate': '微信扫码 · 丰俭由人',
      'docs.sidebar.more.title': '探索更多',
      'docs.sidebar.more.desc': '另一个用心的作品',
      'docs.sidebar.more.cta': '去看看',
      'docs.sidebar.footer_quote': '"开源不易，感谢支持"',

      'docs.support.weixin.title': '不迷路',
      'docs.support.weixin.subtitle': '第一时间获取更新通知',
      'docs.support.weixin.alt': '微信公众号',
      'docs.support.weixin.hint': '微信扫码关注公众号',
      'docs.support.donate.title': '随心赞赏',
      'docs.support.donate.subtitle': '金额随意，1 元也是鼓励 (´▽`ʃ♡ƪ)',
      'docs.support.donate.alt': '微信支付',
      'docs.support.donate.hint': '微信扫码 · 丰俭由人',

      'docs.platform.none': '暂无平台，请添加',

      'docs.timeline.empty.paste_left': '请在左侧粘贴 timeline.yaml 内容',
      'docs.timeline.empty.load_latest': '或点击右上角「加载官网最新配置」',
      'docs.timeline.section.schedule_mode': '调度模式',

      'docs.day.monday': '周一',
      'docs.day.tuesday': '周二',
      'docs.day.wednesday': '周三',
      'docs.day.thursday': '周四',
      'docs.day.friday': '周五',
      'docs.day.saturday': '周六',
      'docs.day.sunday': '周日'
    
      'docs.action.close': '关闭',
      'docs.version.checking': '检测中...',
      'docs.version.error.fetch_failed': '版本信息获取失败: {status}',
      'docs.version.error.file_not_found': '未在远程版本清单中找到 {file}',
      'docs.version.error.check_failed_log': '版本检测失败:',
      'docs.version.error.check_failed': '版本检测失败: {error}',
      'docs.version.status.no_version': '未检测到版本信息',
      'docs.version.status.new_available': '发现新版本',
      'docs.version.status.current_newer': '当前版本较新（开发版本？）',
      'docs.version.status.latest': '已是最新版本',
      'docs.version.modal.title': '版本检测结果',
      'docs.version.label.file': '配置文件',
      'docs.version.label.current': '当前版本',
      'docs.version.label.latest': '最新版本',
      'docs.version.label.unknown': '未知',
      'docs.version.tip.title': '提示：',
      'docs.version.tip.update_overwrite': '更新将从 GitHub 加载最新的 {file}，你当前的修改将被覆盖。建议先复制保存你的自定义配置。',
      'docs.version.action.update_latest': '更新到最新版本',
      'docs.version.action.later': '稍后更新',
      'docs.version.action.update_now': '立即更新',
      'docs.timeline.new_preset.template_empty': '空白模板（仅采集，不推送不分析）',
      'docs.timeline.custom_name': '自定义',
      'docs.timeline.error.enter_preset_key': '请输入模式标识 (key)',
      'docs.timeline.error.invalid_key_with_leading_rule': 'key 仅支持英文、数字和下划线，且不能以数字开头',
      'docs.timeline.error.enter_display_name': '请输入显示名称',
      'docs.timeline.error.preset_exists': '预设「{key}」已存在',
      'docs.timeline.error.custom_reserved': '不能使用 "custom" 作为预设名',
      'docs.timeline.toast.preset_created': '调度模式「{name}」创建成功',
      'docs.timeline.error.enter_period_key': '请输入时间段标识 (key)',
      'docs.timeline.error.invalid_key': 'key 仅支持英文、数字和下划线',
      'docs.timeline.error.set_start_end_time': '请设置开始和结束时间',
      'docs.timeline.error.start_end_same': '开始时间和结束时间不能相同',
      'docs.timeline.error.period_exists': '时间段「{key}」已存在',
      'docs.timeline.error.preset_section_not_found': '未找到预设配置段',
      'docs.timeline.error.periods_section_not_found': '未找到 periods 配置段',
      'docs.timeline.toast.period_added': '时间段「{name}」添加成功',
      'docs.timeline.confirm.delete_period': '确定删除时间段「{name}」？',
      'docs.timeline.confirm.delete_period_with_refs': '\\n\\n⚠️ 该时间段被以下日计划引用，将同时移除引用：\\n{refs}',
      'docs.timeline.toast.period_deleted': '时间段「{name}」已删除',
      'docs.timeline.suffix.copy': '(副本)',
      'docs.timeline.toast.copied_as': '已复制为「{key}」',
      'docs.timeline.error.protected_preset_delete': '内置预设不可删除，可使用复制功能',
      'docs.timeline.error.custom_not_deletable': 'custom 模式不可删除',
      'docs.timeline.confirm.delete_preset_irreversible': '确定删除调度模式「{name}」？\\n此操作不可撤销。',
      'docs.timeline.toast.preset_deleted': '调度模式「{name}」已删除',
      'docs.timeline.prompt.enter_day_plan_key': '请输入日计划标识 (key)，如 holiday：',
      'docs.timeline.error.day_plan_exists': '日计划「{key}」已存在',
      'docs.timeline.toast.day_plan_added': '日计划「{key}」已添加',
      'docs.timeline.error.day_plan_in_use': '无法删除：「{key}」正在被 {refs} 使用。请先修改周映射。',
      'docs.timeline.confirm.delete_day_plan': '确定删除日计划「{key}」？',
      'docs.timeline.toast.day_plan_deleted': '日计划「{key}」已删除',
      'docs.timeline.error.no_day_plans': '没有可用的日计划',
      'docs.timeline.error.need_two_day_plans': '需要至少两个日计划来分离工作日/周末',
      'docs.timeline.toast.week_map_updated': '周映射已更新',
      'docs.timeline.toast.switched_mode': '已切换至「{name}」模式',

      'docs.action.remove': '移除',
      'docs.timeline.action.delete_day_plan': '删除日计划',
      'docs.timeline.empty.day_plan_uses_default': '空 (全天走 default)',
      'docs.timeline.hint.filter_method_default': '不填则跟随全局 filter.method',
      'docs.timeline.hint.filter_method_inherit': '不填则继承 default（再回退全局）',
      'docs.timeline.label.day_plan': '日计划',
      'docs.timeline.label.mode': '模式',
      'docs.timeline.legend.analyze': '分析',
      'docs.timeline.legend.collect_only': '仅采集',
      'docs.timeline.legend.default': '默认 (default)',
      'docs.timeline.legend.push': '推送',
      'docs.timeline.legend.push_analyze': '推送 + 分析',
      'docs.timeline.option.inherit': '继承',
      'docs.timeline.section.day_plans': '日计划',
      'docs.timeline.section.filter_override_optional': '筛选覆盖（可选）',
      'docs.timeline.section.periods': '时间段 (Periods)',
      'docs.timeline.section.week_map': '周映射',
      'docs.timeline.section.week_view': '周视图',
      'docs.timeline.status.current': '当前',
      'docs.timeline.tooltip.current_time': '当前时间 {time}',
      'docs.timeline.tooltip.uses_default': '使用 default 配置',
      'docs.timeline.unset': '(未设置)',
}
  };

  function normalizeLocale(locale) {
    if (!locale) return DEFAULT_LOCALE;
    const key = String(locale).trim().toLowerCase().replace(/\s+/g, '_');
    return ALIASES[key] || (CATALOGS[locale] ? locale : DEFAULT_LOCALE);
  }

  function getLocaleChain(locale) {
    const normalized = normalizeLocale(locale);
    if (normalized === 'zh-CN') return ['zh-CN'];
    return [normalized, 'zh-CN'];
  }

  function getStoredLocale() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return normalizeLocale(stored);
    } catch (_) {}
    return DEFAULT_LOCALE;
  }

  function setStoredLocale(locale) {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {}
  }

  function formatTemplate(template, params) {
    if (!params) return template;
    return template.replace(/\{(\w+)\}/g, (_, key) => {
      const value = params[key];
      return value === undefined || value === null ? `{${key}}` : String(value);
    });
  }

  function t(key, params = {}, locale = getStoredLocale()) {
    for (const l of getLocaleChain(locale)) {
      const catalog = CATALOGS[l] || {};
      if (Object.prototype.hasOwnProperty.call(catalog, key)) {
        return formatTemplate(catalog[key], params);
      }
    }
    return key;
  }

  function translateStaticDOM() {
    document.documentElement.lang = getStoredLocale();

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = t(key);
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      el.setAttribute('alt', t(key));
    });
  }

  function applyDocsLocale(locale) {
    const normalized = normalizeLocale(locale);
    setStoredLocale(normalized);
    translateStaticDOM();
    const selector = document.getElementById('language-select');
    if (selector && selector.value !== normalized) selector.value = normalized;
  }

  window.trDocs = t;
  window.getDocsLocale = getStoredLocale;
  window.setDocsLocale = applyDocsLocale;

  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('language-select');
    if (selector) {
      selector.value = getStoredLocale();
      selector.addEventListener('change', (e) => {
        applyDocsLocale(e.target.value);
        window.location.reload();
      });
    }
    translateStaticDOM();
  });
})();
