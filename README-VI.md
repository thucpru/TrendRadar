<div align="center" id="trendradar">

<a href="https://github.com/sansan0/TrendRadar" title="TrendRadar">
  <img src="/_image/banner.webp" alt="TrendRadar Banner" width="80%">
</a>

Triển khai trong **30 giây** — Không còn cuộn vô tận, chỉ đọc tin tức bạn thực sự quan tâm

[![GitHub Stars](https://img.shields.io/github/stars/sansan0/TrendRadar?style=flat-square&logo=github&color=yellow)](https://github.com/sansan0/TrendRadar/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/sansan0/TrendRadar?style=flat-square&logo=github&color=blue)](https://github.com/sansan0/TrendRadar/network/members)
[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/version-v6.6.1-blue.svg)](https://github.com/sansan0/TrendRadar)
[![MCP](https://img.shields.io/badge/MCP-v4.0.3-green.svg)](https://github.com/sansan0/TrendRadar)

</div>

<div align="center">

**[中文](README.md)** | **[English](README-EN.md)** | **Tiếng Việt**

</div>

---

## Mục lục

| | | |
|:---:|:---:|:---:|
| [Giới thiệu](#-giới-thiệu) | [Tính năng chính](#-tính-năng-chính) | [Bắt đầu nhanh](#-bắt-đầu-nhanh) |
| [Cấu hình chi tiết](#-cấu-hình-chi-tiết) | [Kênh thông báo](#-kênh-thông-báo) | [Tính năng AI](#-tính-năng-ai) |
| [MCP Server](#-mcp-server) | [Lưu trữ dữ liệu](#-lưu-trữ-dữ-liệu) | [Câu hỏi thường gặp](#-câu-hỏi-thường-gặp) |

---

## Giới thiệu

**TrendRadar** là công cụ tổng hợp tin tức xu hướng tự động, nhẹ và dễ triển khai. Hệ thống thu thập tin tức từ nhiều nền tảng (Toutiao, Baidu, Weibo, Bilibili…) và các nguồn RSS, lọc theo từ khóa hoặc AI, thực hiện phân tích chuyên sâu, rồi đẩy thông báo đến nhiều kênh khác nhau.

**Phù hợp với ai:**
- Người muốn theo dõi tin tức theo chủ đề mà không cần cuộn tay
- Nhà nghiên cứu, nhà phân tích cần tổng hợp xu hướng tự động
- Developer muốn tích hợp dữ liệu tin tức vào AI agent qua MCP

---

## Tính năng chính

### Thu thập dữ liệu
- **11+ nền tảng xu hướng**: Toutiao, Baidu, Weibo, Bilibili, Zhihu, Douyin, Tieba, Ifeng và nhiều hơn nữa
- **RSS tùy chỉnh**: Thêm bất kỳ nguồn RSS nào, có lọc theo độ tươi (ngày)
- **Lịch sử xếp hạng**: Theo dõi biến động thứ hạng theo thời gian

### Lọc tin tức
- **Theo từ khóa**: Nhóm từ khóa có ưu tiên, hỗ trợ regex, logic AND/NOT, giới hạn số lượng
- **Theo AI**: AI tự phân loại tin theo danh sách chủ đề của bạn, chấm điểm 0–1

### Lịch biểu thông minh
- **5 preset có sẵn**: `always_on`, `morning_evening`, `office_hours`, `night_owl`, `custom`
- **Kiểm soát độc lập**: Thu thập / Phân tích AI / Đẩy thông báo có thể bật/tắt riêng cho từng khung giờ

### Thông báo đa kênh (9 kênh)
Telegram · Email · Slack · Feishu · DingTalk · WeChat Work · ntfy · Bark · Generic Webhook

### Tính năng AI (qua LiteLLM — hỗ trợ 100+ model)
- **Phân tích xu hướng**: Đánh giá chuyên sâu, sentiment, dự báo
- **Dịch đa ngôn ngữ**: Tự động dịch nội dung sang ngôn ngữ tùy chọn
- **Lọc thông minh**: Phân loại tin bằng AI theo sở thích mô tả bằng ngôn ngữ tự nhiên

### MCP Server (v4.0.3)
- Tích hợp với Claude, Cherry Studio, và bất kỳ MCP client nào
- 25+ công cụ: truy vấn dữ liệu, phân tích, tìm kiếm, đẩy thông báo

---

## Bắt đầu nhanh

Có 4 cách triển khai. Chọn theo nhu cầu:

| Phương thức | Độ khó | Chi phí | Phù hợp |
|---|---|---|---|
| GitHub Actions | ⭐ Dễ nhất | Miễn phí | Dùng thử, không cần server |
| Docker | ⭐⭐ | Server riêng | Chạy liên tục, ổn định |
| Cài đặt local | ⭐⭐ | Máy tính | Developer, tích hợp MCP |
| Thủ công | ⭐⭐⭐ | Tùy | Tùy chỉnh sâu |

---

### Cách 1: GitHub Actions (Dễ nhất)

Không cần server, không cần cài đặt. GitHub tự chạy theo lịch.

**Bước 1 — Fork repository**

Nhấn nút **Fork** trên GitHub để tạo bản sao vào tài khoản của bạn.

**Bước 2 — Tùy chỉnh cấu hình**

Chỉnh sửa `config/config.yaml` trực tiếp trên GitHub hoặc dùng trình chỉnh sửa trực quan tại:

```
https://sansan0.github.io/TrendRadar/
```

**Bước 3 — Cấu hình Secrets (bảo mật)**

Vào **Settings → Secrets and variables → Actions**, thêm các secret:

```
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
AI_API_KEY=your_openai_key
# ... và các kênh khác bạn dùng
```

> **Lưu ý bảo mật**: Không bao giờ điền webhook/token trực tiếp vào `config.yaml` trong repo public. Luôn dùng GitHub Secrets.

**Bước 4 — Kích hoạt Actions**

Vào tab **Actions**, bật workflow `crawler.yml`. GitHub Actions sẽ tự chạy theo lịch (mặc định mỗi giờ).

**Hệ thống Trial (7 ngày)**

GitHub Actions có giới hạn tài nguyên. TrendRadar dùng hệ thống "check-in" 7 ngày tự động gia hạn. Khi sắp hết hạn, bạn sẽ nhận thông báo để check-in lại.

---

### Cách 2: Docker (Khuyến nghị cho dùng liên tục)

**Yêu cầu**: Docker và Docker Compose đã cài.

**Bước 1 — Tải cấu hình**

```bash
git clone https://github.com/sansan0/TrendRadar.git
cd TrendRadar
```

**Bước 2 — Tạo file môi trường**

```bash
cp docker/.env.example docker/.env
```

Chỉnh sửa `docker/.env`:

```bash
# Múi giờ
TZ=Asia/Ho_Chi_Minh

# Lịch chạy (cron syntax) — mặc định mỗi 30 phút
CRON_SCHEDULE=*/30 * * * *

# Chạy ngay khi khởi động
IMMEDIATE_RUN=true

# Port web UI
WEBSERVER_PORT=8080

# Telegram (ví dụ)
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id

# AI (chọn một trong các provider)
AI_API_KEY=your_key
AI_MODEL=deepseek/deepseek-chat
AI_BASE_URL=https://api.deepseek.com/v1
```

**Bước 3 — Khởi động**

```bash
# Dùng image từ Docker Hub (nhanh hơn)
docker compose up -d

# Hoặc build từ source
docker compose -f docker-compose-build.yml up -d
```

**Bước 4 — Kiểm tra**

```bash
# Xem log
docker compose logs -f trendradar

# Truy cập web UI
# http://localhost:8080
```

**Cấu trúc Docker Compose gồm 2 service:**
- `trendradar` — Crawler chính, web UI (port 8080)
- `trendradar-mcp` — MCP Server HTTP (port 3333)

---

### Cách 3: Cài đặt local

**Yêu cầu**: Python >= 3.12

**Windows:**

```bash
# Chạy script tự động (cài UV package manager + dependencies)
setup-windows.bat
```

**macOS/Linux:**

```bash
chmod +x setup-mac.sh
./setup-mac.sh
```

**Thủ công (mọi hệ điều hành):**

```bash
# Cài UV (package manager nhanh hơn pip)
pip install uv

# Cài dependencies
uv sync

# Chạy thử
uv run python -m trendradar
```

**Khởi động MCP Server:**

```bash
# STDIO mode (dùng với Cherry Studio, Claude Desktop)
uv run python -m mcp_server.server

# HTTP mode (dùng từ xa hoặc nhiều client)
uv run python -m mcp_server.server --transport http --port 3333
```

---

## Cấu hình chi tiết

Tất cả cấu hình nằm trong thư mục `config/`. Bạn có thể dùng **trình chỉnh sửa trực quan** tại `https://sansan0.github.io/TrendRadar/` thay vì chỉnh sửa file YAML thủ công.

### config.yaml — Cấu hình chính

#### Cài đặt ứng dụng (`app`)

```yaml
app:
  timezone: "Asia/Ho_Chi_Minh"   # Múi giờ Việt Nam
  ui_language: "vi-VN"           # Ngôn ngữ giao diện: vi-VN / en / zh-CN
  show_version_update: true      # Hiển thị thông báo phiên bản mới
```

#### Lịch biểu (`schedule`)

```yaml
schedule:
  enabled: true
  preset: "morning_evening"      # Chọn preset (xem bên dưới)
```

**5 preset có sẵn:**

| Preset | Mô tả | Phù hợp |
|---|---|---|
| `always_on` | Liên tục, đẩy ngay khi có tin mới, không phân tích AI | Cần thông tin thời gian thực |
| `morning_evening` | Đẩy cả ngày + tổng hợp buổi tối **(Khuyến nghị)** | Cân bằng giữa cập nhật và tổng hợp |
| `office_hours` | 3 lần/ngày theo giờ làm việc | Dùng trong giờ hành chính |
| `night_owl` | Tóm tắt buổi chiều + tổng hợp khuya | Thức khuya, muốn đọc khuya |
| `custom` | Tự định nghĩa trong `timeline.yaml` | Lịch đặc thù |

#### Nguồn dữ liệu — Nền tảng xu hướng (`platforms`)

```yaml
platforms:
  enabled: true
  sources:
    - id: "toutiao"
      name: "Toutiao"
    - id: "weibo"
      name: "Weibo"
    - id: "bilibili-hot-search"
      name: "Bilibili"
    # Xóa dòng nào bạn không muốn thu thập
```

**Danh sách platform hỗ trợ:**

| ID | Tên | Loại |
|---|---|---|
| `toutiao` | Toutiao | Tin tức tổng hợp |
| `baidu` | Baidu Hot Search | Tìm kiếm |
| `weibo` | Weibo | Mạng xã hội |
| `bilibili-hot-search` | Bilibili | Video |
| `zhihu` | Zhihu | Q&A |
| `douyin` | Douyin | Video ngắn |
| `tieba` | Tieba | Diễn đàn |
| `ifeng` | Phoenix News | Tin tức |
| `thepaper` | The Paper | Báo chí |
| `wallstreetcn-hot` | Wall Street CN | Tài chính |
| `cls-hot` | CLS Financial | Tài chính |

#### RSS (`rss`)

```yaml
rss:
  enabled: true
  freshness_filter:
    max_age_days: 3              # Chỉ lấy bài trong 3 ngày gần nhất
  sources:
    - id: "my_rss_1"
      name: "Tên hiển thị"
      url: "https://example.com/feed.xml"
      max_age_days: 7            # Ghi đè global, tùy chọn
    - id: "my_rss_2"
      name: "Reuters"
      url: "https://feeds.reuters.com/reuters/topNews"
```

#### Bộ lọc tin tức (`filter`)

```yaml
filter:
  method: "keyword"              # "keyword" hoặc "ai"
```

- `keyword`: Lọc theo file `config/frequency_words.txt`
- `ai`: Lọc bằng AI theo file `config/ai_interests.txt`

#### Chế độ báo cáo (`report`)

```yaml
report:
  mode: "incremental"            # Loại báo cáo
  display_by: "keyword"          # Sắp xếp theo: "keyword" hoặc "platform"
```

**Các chế độ báo cáo:**

| Chế độ | Mô tả |
|---|---|
| `daily` | Tất cả tin trong ngày hôm nay |
| `current` | Bảng xếp hạng hiện tại (snapshot) |
| `incremental` | Chỉ tin mới so với lần push trước |

---

### timeline.yaml — Lịch biểu chi tiết

File này định nghĩa **khi nào** làm gì. Mỗi "period" (khung giờ) có thể bật/tắt riêng: thu thập, phân tích AI, đẩy thông báo.

**Ví dụ preset `morning_evening`:**

```
07:00 – 22:00  → Thu thập liên tục + đẩy tin gia tăng (không AI)
22:00 – 23:00  → Thu thập + Phân tích AI + Đẩy tổng hợp cả ngày
23:00 – 07:00  → Chỉ thu thập, không đẩy
```

Bạn có thể chỉnh sửa `config/timeline.yaml` trực tiếp hoặc dùng Timeline Editor trong web UI.

---

### frequency_words.txt — Lọc theo từ khóa

Dùng khi `filter.method: "keyword"`. File có 2 phần:

#### Phần 1: `[GLOBAL_FILTER]` — Blacklist từ khóa

```
[GLOBAL_FILTER]
quảng cáo
click bait
```

Tin chứa bất kỳ từ nào trong đây sẽ bị loại bỏ.

#### Phần 2: `[WORD_GROUPS]` — Nhóm từ khóa theo dõi

```
[WORD_GROUPS]

# Nhóm AI - theo dõi tin về trí tuệ nhân tạo
[AI & Machine Learning]
ChatGPT
/GPT-4|GPT-5|Claude/          # Regex: khớp nhiều từ
OpenAI
+AI                            # Bắt buộc phải có "AI"
!trò chơi                      # Loại tin có "trò chơi"
@10                            # Tối đa 10 tin/nhóm

# Nhóm không có tên (dùng từ đầu tiên làm tên)
Tesla|EV|xe điện               # Pipe = OR, tên hiển thị là "Tesla"
```

**Cú pháp tóm tắt:**

| Ký hiệu | Ý nghĩa | Ví dụ |
|---|---|---|
| Không có | Khớp nếu tin chứa từ này | `OpenAI` |
| `[Tên]` | Đặt tên cho nhóm | `[Tài chính]` |
| `/regex/` | Dùng biểu thức chính quy | `/GPT-[45]/` |
| `từ1\|từ2` | Khớp từ 1 HOẶC từ 2 | `Bitcoin\|Crypto` |
| `+từ` | Bắt buộc phải có từ này (AND) | `+AI` |
| `!từ` | Loại nếu có từ này (NOT) | `!game` |
| `@N` | Giới hạn N tin mỗi nhóm | `@5` |

---

### ai_interests.txt — Lọc theo AI

Dùng khi `filter.method: "ai"`. Mô tả sở thích bằng ngôn ngữ tự nhiên:

```
1. Trí tuệ nhân tạo, mô hình ngôn ngữ lớn (LLM), ChatGPT, Claude, Gemini, ứng dụng AI thực tế
2. Thị trường chứng khoán, tiền tệ, kinh tế vĩ mô, lạm phát, Fed
3. Xe điện, Tesla, pin, công nghệ ô tô
4. Bán dẫn, chip, TSMC, NVIDIA, chuỗi cung ứng
5. Địa chính trị, quan hệ quốc tế, xung đột, ngoại giao
```

AI sẽ tự chiết xuất thẻ từ mô tả của bạn và dùng để phân loại tin tức. Mỗi tin được chấm điểm 0–1; chỉ tin đạt ngưỡng (`min_score: 0.7`) mới được đưa vào báo cáo.

**Cấu hình AI filter trong config.yaml:**

```yaml
ai_filter:
  batch_size: 20               # Số tin phân tích mỗi lần gọi API
  min_score: 0.7               # Ngưỡng điểm tối thiểu (0.0–1.0)
  reclassify_threshold: 5      # Phân loại lại toàn bộ nếu số tag thay đổi > 5
```

---

## Kênh thông báo

### Telegram

```yaml
notification:
  telegram:
    enabled: true
    bots:
      - token: "YOUR_BOT_TOKEN"
        chat_id: "YOUR_CHAT_ID"
      # Hỗ trợ tối đa 3 bot/chat khác nhau
```

**Lấy token**: Chat với [@BotFather](https://t.me/BotFather) → `/newbot`

**Lấy chat_id**: Chat với [@userinfobot](https://t.me/userinfobot)

---

### Email

```yaml
notification:
  email:
    enabled: true
    smtp_host: "smtp.gmail.com"
    smtp_port: 587
    use_tls: true
    username: "your@gmail.com"
    password: "your_app_password"    # Dùng App Password, không phải mật khẩu thường
    from_addr: "your@gmail.com"
    to_addrs:
      - "recipient@example.com"
```

**Gmail**: Bật 2FA → Tạo App Password tại myaccount.google.com/apppasswords

---

### Slack

```yaml
notification:
  slack:
    enabled: true
    webhooks:
      - url: "https://hooks.slack.com/services/..."
```

---

### Feishu (飞书)

```yaml
notification:
  feishu:
    enabled: true
    webhooks:
      - url: "https://open.feishu.cn/open-apis/bot/v2/hook/..."
        secret: "your_secret"        # Nếu webhook có xác thực
```

---

### DingTalk (钉钉)

```yaml
notification:
  dingtalk:
    enabled: true
    webhooks:
      - url: "https://oapi.dingtalk.com/robot/send?access_token=..."
        secret: "SEC..."
```

---

### ntfy

```yaml
notification:
  ntfy:
    enabled: true
    servers:
      - url: "https://ntfy.sh/your-topic"
```

---

### Bark (iOS)

```yaml
notification:
  bark:
    enabled: true
    servers:
      - url: "https://api.day.app/YOUR_KEY/"
```

---

### Generic Webhook

```yaml
notification:
  webhook:
    enabled: true
    endpoints:
      - url: "https://your.server/webhook"
        method: "POST"
        headers:
          Authorization: "Bearer your_token"
          Content-Type: "application/json"
        template: |
          {"text": "{{content}}"}
```

---

### Đa tài khoản

Mỗi kênh hỗ trợ tối đa 3 cấu hình riêng biệt (ví dụ: đẩy đồng thời vào nhiều nhóm Telegram khác nhau).

---

## Tính năng AI

TrendRadar dùng **LiteLLM** để hỗ trợ 100+ nhà cung cấp AI. Bạn có thể dùng bất kỳ model nào tương thích.

### Cấu hình model AI

```yaml
ai:
  api_key: "your_api_key"
  model: "deepseek/deepseek-chat"        # Hoặc "gpt-4o", "gemini/gemini-pro"…
  base_url: "https://api.deepseek.com/v1"  # Tùy chọn, bỏ trống nếu dùng OpenAI
  temperature: 0.3
  max_tokens: 4096
  timeout: 120
```

**Các provider phổ biến:**

| Provider | Model ví dụ | Ghi chú |
|---|---|---|
| OpenAI | `gpt-4o`, `gpt-4o-mini` | Cần `OPENAI_API_KEY` |
| DeepSeek | `deepseek/deepseek-chat` | Rẻ, nhanh, khuyến nghị |
| Google Gemini | `gemini/gemini-2.0-flash` | Miễn phí tier khá rộng |
| Anthropic | `claude-opus-4-7` | Chất lượng cao |
| Ollama (local) | `ollama/llama3` | Miễn phí, chạy cục bộ |

---

### Phân tích AI (`ai_analysis`)

Phân tích chuyên sâu xu hướng tin tức, sentiment, dự báo.

```yaml
ai_analysis:
  enabled: true
  language: "vi"                 # Ngôn ngữ đầu ra phân tích
  mode: "summary"                # "summary" hoặc "detailed"
  max_news_for_analysis: 30      # Số tin tối đa đưa vào phân tích
```

Bạn có thể tùy chỉnh prompt phân tích trong `config/ai_analysis_prompt.txt`.

---

### Dịch thuật AI (`ai_translation`)

Tự động dịch tiêu đề tin và RSS sang ngôn ngữ khác.

```yaml
ai_translation:
  enabled: true
  target_language: "vi"          # Dịch sang tiếng Việt
  translate_hotlist: true        # Dịch tin tức xu hướng
  translate_rss: true            # Dịch RSS
  translate_standalone: false    # Dịch section độc lập
```

---

## MCP Server

MCP Server cho phép AI assistant (Claude, Cherry Studio…) trực tiếp truy vấn và phân tích dữ liệu TrendRadar.

### Cài đặt với Cherry Studio

Xem hướng dẫn đầy đủ: [README-Cherry-Studio.md](README-Cherry-Studio.md)

### Cài đặt với Claude Desktop

Thêm vào `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "trendradar": {
      "command": "uv",
      "args": ["run", "--directory", "/path/to/TrendRadar", "python", "-m", "mcp_server.server"],
      "env": {
        "TRENDRADAR_CONFIG_DIR": "/path/to/TrendRadar/config",
        "TRENDRADAR_DATA_DIR": "/path/to/TrendRadar/output"
      }
    }
  }
}
```

### HTTP Mode (truy cập từ xa)

```bash
uv run python -m mcp_server.server --transport http --port 3333
```

Endpoint: `http://your-server:3333/mcp`

---

### Công cụ MCP có sẵn (25+)

**Truy vấn dữ liệu:**
- `get_latest_news` — Lấy tin xu hướng mới nhất
- `get_news_by_date` — Tin theo khoảng thời gian
- `get_trending_topics` — Thống kê chủ đề nổi bật
- `get_latest_rss` — RSS mới nhất
- `search_rss` — Tìm kiếm trong RSS

**Tìm kiếm & Tổng hợp:**
- `search_news` — Tìm kiếm theo từ khóa/entity
- `find_related_news` — Tìm tin liên quan
- `aggregate_news` — Gộp và khử trùng lặp đa nền tảng

**Phân tích:**
- `analyze_topic_trend` — Phân tích xu hướng chủ đề (heat, vòng đời, dự báo)
- `analyze_data_insights` — So sánh nền tảng, co-occurrence
- `analyze_sentiment` — Phân tích cảm xúc
- `compare_periods` — So sánh theo tuần/tháng
- `generate_summary_report` — Tạo báo cáo tổng hợp

**Hệ thống:**
- `get_current_config` — Xem cấu hình hiện tại
- `get_system_status` — Trạng thái hệ thống
- `check_version` — Kiểm tra phiên bản mới
- `trigger_crawl` — Kích hoạt thu thập thủ công

**Thông báo:**
- `send_notification` — Đẩy thông báo thủ công đến kênh đã cấu hình
- `get_notification_channels` — Xem trạng thái các kênh

**Ví dụ câu hỏi với Claude:**
```
"Phân tích xu hướng tin tức về AI tuần này"
"Tìm các tin về Tesla trong 3 ngày qua"
"So sánh chủ đề nổi bật hôm nay với tuần trước"
"Gửi tóm tắt tin tức lên Telegram"
```

---

## Lưu trữ dữ liệu

### Backend lưu trữ

```yaml
storage:
  backend: "auto"                # "auto" / "local" / "remote"
  local:
    retention_days: 30           # Giữ dữ liệu 30 ngày (0 = vĩnh viễn)
    formats:
      sqlite: true               # Bắt buộc, dùng cho MCP
      txt: false                 # Bản sao dạng văn bản
      html: true                 # Báo cáo HTML
  remote:
    enabled: false
    provider: "cloudflare_r2"    # Hoặc "aws_s3", "aliyun_oss", "tencent_cos", "minio"
    bucket: "your-bucket"
    access_key: "..."
    secret_key: "..."
    endpoint_url: "..."          # Cần thiết cho R2, OSS, COS, MinIO
    retention_days: 90
```

### Lưu trữ từ xa (S3-compatible)

Hỗ trợ: **Cloudflare R2** (có free tier) · AWS S3 · Aliyun OSS · Tencent COS · MinIO

Khi bật lưu trữ từ xa:
- Crawler đẩy dữ liệu lên cloud sau mỗi lần thu thập
- MCP Server có thể tự tải dữ liệu từ cloud khi khởi động
- Hữu ích khi triển khai phân tán (crawler riêng, MCP server riêng)

---

## Câu hỏi thường gặp

**Tôi không nhận được thông báo Telegram**

Kiểm tra theo thứ tự:
1. Bot token có đúng không? (dùng `https://api.telegram.org/bot{TOKEN}/getMe`)
2. Chat ID có đúng không? (nhớ giữ dấu `-` với group chat)
3. Bot đã được thêm vào group/channel chưa?
4. Xem log: `docker compose logs trendradar`

---

**Lịch biểu không chạy đúng giờ**

Kiểm tra `app.timezone` trong `config.yaml`. Múi giờ phải khớp với múi giờ bạn muốn lên lịch. Ví dụ Việt Nam: `Asia/Ho_Chi_Minh`.

---

**AI phân tích không hoạt động**

1. Kiểm tra `AI_API_KEY` đã được set chưa (trong `docker/.env` hoặc GitHub Secrets)
2. Kiểm tra `ai_analysis.enabled: true` trong config
3. Xem log để tìm lỗi API (quota, sai key, timeout)
4. Thử model DeepSeek (`deepseek/deepseek-chat`) — rẻ và nhanh

---

**Lọc từ khóa không ra kết quả**

1. Đảm bảo `filter.method: "keyword"` trong config
2. Kiểm tra file `config/frequency_words.txt` có phần `[WORD_GROUPS]`
3. Từ khóa phân biệt hoa/thường? Không — TrendRadar so khớp không phân biệt
4. Tin không đủ mới? Kiểm tra `freshness_filter.max_age_days`

---

**MCP Server không kết nối được**

1. Đảm bảo server đã chạy: `uv run python -m mcp_server.server`
2. Kiểm tra port 3333 không bị firewall chặn
3. Path `TRENDRADAR_DATA_DIR` phải trỏ đúng đến thư mục output có dữ liệu

---

**Báo cáo HTML ở đâu?**

- Local: thư mục `output/` trong project
- Docker: mount volume `output`, truy cập qua web UI tại `http://localhost:8080`
- Remote: trên S3 bucket bạn đã cấu hình

---

## Cấu trúc thư mục

```
TrendRadar/
├── config/                     # Tất cả cấu hình
│   ├── config.yaml             # Cấu hình chính
│   ├── timeline.yaml           # Lịch biểu chi tiết
│   ├── frequency_words.txt     # Từ khóa lọc tin
│   ├── ai_interests.txt        # Danh sách sở thích cho AI filter
│   ├── ai_analysis_prompt.txt  # Prompt phân tích AI
│   └── ai_translation_prompt.txt
├── trendradar/                 # Module chính
│   ├── core/                   # Scheduler, analyzer, data model
│   ├── crawler/                # Thu thập dữ liệu
│   ├── ai/                     # Tích hợp AI
│   ├── notification/           # Gửi thông báo
│   ├── report/                 # Tạo báo cáo HTML
│   ├── storage/                # Quản lý lưu trữ
│   └── i18n/                   # Đa ngôn ngữ (vi-VN / en / zh-CN)
├── mcp_server/                 # MCP Server
│   └── tools/                  # 25+ MCP tools
├── docs/                       # Web UI cấu hình
│   └── assets/i18n.js          # Bản dịch web UI
├── docker/                     # Docker configs & scripts
├── output/                     # Dữ liệu và báo cáo (tạo tự động)
└── docker-compose.yml
```

---

## Phiên bản

| Thành phần | Phiên bản |
|---|---|
| TrendRadar | 6.6.1 |
| MCP Server | 4.0.3 |
| Config schema | 2.2.0 |
| Timeline schema | 1.2.0 |

---

## Giấy phép

[GPL-3.0](LICENSE) — Mã nguồn mở, miễn phí sử dụng và tùy chỉnh. Khi phân phối lại phải giữ nguyên giấy phép.

---

<div align="center">

Nếu TrendRadar hữu ích với bạn, hãy ⭐ **Star** repository để ủng hộ dự án!

[Báo cáo lỗi](https://github.com/sansan0/TrendRadar/issues) · [Đóng góp](https://github.com/sansan0/TrendRadar/pulls) · [Changelog](README.md#-更新日志)

</div>
