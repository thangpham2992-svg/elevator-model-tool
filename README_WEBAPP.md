# Elevator Sales Tool – Webapp (iOS/Android)

## 1) Dùng trên iPhone/iPad (iOS)
**Lưu ý quan trọng:** iOS *không chạy đúng chế độ offline/PWA* nếu bạn mở file kiểu `file:///` (mở trực tiếp từ Files). Tool cần được **host** trên web (HTTPS) hoặc chạy qua **localhost**.

### Cách dùng (khuyến nghị): Add to Home Screen
1. Mở link tool bằng **Safari**.
2. Nhấn nút **Share** (hình vuông có mũi tên lên).
3. Chọn **Add to Home Screen**.
4. Mở app từ icon ngoài màn hình. (Sẽ chạy dạng Webapp, cache offline).

## 2) Dùng trên Android
1. Mở link bằng **Chrome**.
2. Chrome thường hiện banner **Install app**. Nếu không thấy:
   - Nhấn **⋮** (menu) → **Add to Home screen** / **Install app**.
3. Mở app từ icon. (Sẽ chạy offline sau khi load lần đầu).

## 3) Cách “host” nhanh nhất (Cách 1 – dễ nhất): GitHub Pages
Bạn chỉ cần 1 tài khoản GitHub.

### Bước A — Tạo repo và upload file
1. Vào GitHub → **New repository** (ví dụ: `elevator-sales-tool`).
2. Upload **toàn bộ file** trong thư mục tool (giữ nguyên cấu trúc):
   - `index.html`
   - `assets/`, `Catalogue/`, `icons/`
   - `manifest.json`, `service-worker.js`

### Bước B — Bật Pages
1. Vào **Settings** → **Pages**.
2. Source: chọn **Deploy from a branch**.
3. Branch: **main** / folder: **/(root)**.
4. Save → GitHub sẽ tạo 1 link dạng `https://<username>.github.io/<repo>/`.

### Bước C — Mở trên điện thoại
- Mở link bằng Safari/Chrome → Add to Home Screen.

## 4) Offline hoạt động thế nào?
- Lần đầu cần **mở online** để tool tải và cache.
- Sau đó có thể mở lại **không cần mạng** (các file đã cache).
- Khi bạn update tool: đổi version (hoặc chỉ cần mở online 1 lần, service worker sẽ tự cập nhật).

## 5) Hướng dẫn sử dụng nhanh
1. Chọn **Place of Uses** (Passenger/Cargo).
2. Chọn **Machine room type**.
3. Chọn **Standard**.
4. (Tuỳ chọn) chọn **Xuất xứ**.
5. Chọn **Capacity** & **Speed** (EXACT) → bấm **Run**.
6. Click 1 dòng trong bảng để xem **Catalogue preview**.

---
Nếu bạn muốn mình làm luôn bản **upload sẵn lên hosting** theo domain công ty (nội bộ) thì chỉ cần đưa mình thông tin máy chủ/IT support.
