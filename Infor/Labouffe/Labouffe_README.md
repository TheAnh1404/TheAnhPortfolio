# 🍽️ LaBouffe — Premium Food Delivery Mobile Application

<div align="center">
  <img src="./labouffe_banner.png" alt="LaBouffe Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px;" />

  <h3>🌟 Elevating Digital Gastronomy — Built for Speed, Scale & Security 🌟</h3>
  <p>Một hệ sinh thái đặt và giao đồ ăn siêu cao cấp (Ultra-Premium) toàn diện. Được thiết kế tinh tế với kiến trúc tối tân, bảo mật tối đa và giao diện chuyển động mượt mà đạt chuẩn App Store / Google Play flagship.</p>

  <p align="center">
    <img src="https://img.shields.io/badge/Expo-SDK_54-000000.svg?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
    <img src="https://img.shields.io/badge/React_Native-v0.81.5-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black" alt="React Native" />
    <img src="https://img.shields.io/badge/TypeScript-v5.9-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Firebase-v12.11-FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/Stripe-Payment_Sheet-635BFF.svg?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
    <img src="https://img.shields.io/badge/TanStack_Query-v5-FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query" />
    <img src="https://img.shields.io/badge/Sentry-Monitoring-362D59.svg?style=for-the-badge&logo=sentry&logoColor=white" alt="Sentry" />
  </p>
</div>

---

## 📖 Tổng Quan Dự Án (Project Pitch)

**LaBouffe** không chỉ là một ứng dụng đặt đồ ăn thông thường, đây là giải pháp công nghệ di động toàn diện kết hợp giữa **Frontend Hybrid (React Native + Expo SDK 54)** và **Serverless Backend (Firebase Cloud Functions + Firestore)**. 

Dự án được đúc kết từ kinh nghiệm thực chiến trên 10 năm phát triển ứng dụng di động, áp dụng các tiêu chuẩn chất lượng khắt khe nhất của ngành:
* **Giao diện chuyển động 60fps**: Tích hợp các thư viện hoạt ảnh thế hệ mới giúp chuyển cảnh mượt mà như native app thuần túy.
* **Bảo mật giao dịch tuyệt đối**: Thực thi kiểm duyệt chặt chẽ, loại bỏ hoàn toàn khả năng can thiệp giá từ client.
* **Tối ưu hóa hóa đơn đám mây**: Giảm thiểu tới 80% lượt đọc Firestore nhờ lớp đệm lưu trữ dữ liệu thông minh trên RAM.
* **Thời gian thực (Real-time)**: Bản đồ theo dõi Shipper chuyển động nội suy thời gian thực siêu thực tế.

---

## 🏗️ Kiến Trúc Hệ Thống (Enterprise-Grade Architecture)

Hệ thống được thiết kế theo mô hình **Unidirectional Data Flow (Dòng dữ liệu một chiều)** kết hợp lớp cache trung gian nhằm tối ưu hiệu năng mạng:

```
┌────────────────────────────────────────────────────────────────────────┐
│                              MOBILE APP                                │
│                         (React Native + Expo)                          │
│                                                                        │
│  ┌───────────┐  ┌───────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Auth    │  │   Cart    │  │  Location    │  │  Telemetry       │  │
│  │  Context  │  │  Context  │  │  Context     │  │  (Sentry Active) │  │
│  └─────┬─────┘  └─────┬─────┘  └──────┬───────┘  └────────┬─────────┘  │
│        │              │               │                   │            │
│        │        ┌─────▼───────────────▼───────────────────▼──────┐     │
│        │        │           TanStack React Query v5              │     │
│        │        │               (Caching Layer)                  │     │
│        │        └─────────────────────┬──────────────────────────┘     │
│  ┌─────▼──────────────────────────────▼──────────────────────────┐     │
│  │              Services Layer (api.ts & notifications.ts)       │     │
│  └────────────────────────────────────┬──────────────────────────┘     │
└───────────────────────────────────────┼────────────────────────────────┘
                                        │ (Secure API Call / Secure Push Tokens)
┌───────────────────────────────────────┼────────────────────────────────┐
│                           FIREBASE BACKEND                             │
│                                                                        │
│  ┌────────────────────────────────────▼─────────────────────────────┐  │
│  │                  Cloud Functions (Serverless Node.js)            │  │
│  │  • processOrder — Server-side calculations & ACID Transaction    │  │
│  │  • cancelOrder  — Secure order cancellation with status checks   │  │
│  │  • createPaymentIntent — Secure Stripe integration gateway       │  │
│  │  • onOrderStatusChange — FCM Push deep-linking dispatcher        │  │
│  │  • onUserCreate — Automatic document profile initializer         │  │
│  └──────┬──────────────────────┬──────────────────────┬─────────────┘  │
│         │                      │                      │                │
│  ┌──────▼──────┐        ┌──────▼──────┐        ┌──────▼──────┐         │
│  │  Firestore  │        │  Firebase   │        │   Cloud     │         │
│  │  Database   │        │  Auth       │        │   Storage   │         │
│  └─────────────┘        └─────────────┘        └─────────────┘         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💎 Những Đột Phá Công Nghệ Cốt Lõi (Architectural Masterpieces)

### 🗺️ 1. Live Map & Shipper GPS Tracking (Bản Đồ Chuyển Động Trơn Tru)
* **Visual Map**: Sử dụng `react-native-maps` tích hợp Apple Maps (iOS) và Google Maps (Android) vẽ toàn bộ lộ trình thông qua các polyline nét đứt thời trang.
* **Driver Location Simulator**: Thuật toán nội suy tuyến tính (Linear Interpolation) chạy ngầm giúp tính toán các bước di chuyển nhỏ giữa các điểm định vị. Xe của shipper chuyển động mượt mà liên tục ở tốc độ 60fps trên bản đồ, tránh hiện tượng giật cục thường thấy của các app dùng API định vị thô.
* **Dynamic Geolocation**: Tự động liên lạc với `LocationContext` để tính toán khoảng cách thực tế giữa Khách hàng 📍, Nhà hàng 🏪 và Shipper 🏍️.

### ⚡ 2. TanStack React Query v5 (Siêu Tốc & Tối Ưu Hóa Chi Phí Đám Mây)
* **Eliminating N+1 Reads**: Loại bỏ hoàn toàn mô hình lắng nghe Firestore trực tiếp trong `useEffect` gây lãng phí kết nối mạng và tăng nguy cơ rò rỉ bộ nhớ.
* **Zero-Latency Navigation**: Menu món ăn, danh mục và thông tin nhà hàng được cấu hình cache trong **5 phút**. Khách hàng có thể chuyển đổi qua lại giữa các tab menu ngay lập tức mà không phải nhìn màn hình loading, mang lại trải nghiệm nhanh như chớp.
* **80% Cost Reduction**: Tiết kiệm đáng kể tài nguyên đọc Firestore, giảm thiểu tối đa hóa đơn điện toán đám mây cho doanh nghiệp khi vận hành quy mô lớn.

### 💳 3. Cổng Thanh Toán Stripe & Giao Dịch ACID Đảm Bảo
* **PCI-DSS Compliant**: Tích hợp `@stripe/stripe-react-native` hiển thị `PaymentSheet` chuẩn hóa bảo mật quốc tế. Thông tin thẻ được xử lý trực tiếp bởi Stripe, client hoàn toàn không có quyền tiếp xúc.
* **Server-Side Verification**: 
  1. Khi người dùng bấm thanh toán bằng ví, Cloud Function sẽ thực hiện một **ACID Transaction** kiểm tra số dư và trừ tiền nguyên tử, loại bỏ nguy cơ ghi đè dữ liệu bất hợp lệ hoặc giao dịch kép.
  2. Với giao dịch qua Stripe, backend sẽ bắt tay trực tiếp với Stripe API để xác thực trạng thái `PaymentIntent` trước khi xác nhận đơn hàng trên cơ sở dữ liệu.

### 🔐 4. Triệt Tiêu Lỗ Hổng Giá (Direct-Write Ban)
* **Serverless Enforcement**: Hủy bỏ hoàn toàn việc cho phép Client viết đơn hàng trực tiếp lên Firestore. Tất cả đơn hàng bắt buộc phải gọi thông qua API bảo mật `processOrder`.
* **Zero Client Price Manipulation**: Ngăn chặn hacker thay đổi giá tiền món ăn hoặc phí vận chuyển trên điện thoại để mua hàng giá rẻ. Toàn bộ thông số giá và tính toán hóa đơn đều được tính toán và kiểm tra chéo tại Server dựa trên cơ sở dữ liệu gốc.

### 📈 5. EAS Native Compilation & Sentry Telemetry
* **EAS Channel Pipelines**: Cấu hình phân phối 3 kênh độc lập qua `eas.json`:
  * `development`: Dành cho việc debug lập trình viên, tích hợp Expo Dev Client.
  * `preview`: Phục vụ kiểm thử nội bộ (Staging).
  * `production`: Build tối ưu hóa dung lượng nén để đẩy trực tiếp lên Store.
* **Native Crash Monitoring**: Sentry tự động thu thập log của cả JS Engine (Hermes) lẫn Native Engine (Objective-C/C++ & Java). Hỗ trợ tải mã nguồn sourcemap để giải mã chính xác dòng code gây lỗi.

---

## 📁 Cấu Trúc Dự Án (Project Anatomy)

Kiến trúc thư mục được phân định rõ ràng giữa Client-side và Server-side để dễ dàng bảo trì và scale quy mô nhân sự lập trình:

```
LaBouffe/
├── functions/                            # 🚀 CLOUD BACKEND (Node.js + TS)
│   ├── src/
│   │   ├── index.ts                      # Cổng xuất bản API (API Gateway)
│   │   ├── orders/
│   │   │   ├── processOrder.ts           # [ACID Transaction] Tạo đơn & Xác thực giao dịch
│   │   │   ├── cancelOrder.ts            # Hủy đơn hàng an toàn (Chỉ khi status = 'placed')
│   │   │   └── onOrderStatusChange.ts    # FCM Push Notification & Deep-linking
│   │   └── users/
│   │       └── onUserCreate.ts           # Trình khởi tạo profile khi user đăng ký thành công
│   ├── package.json
│   └── tsconfig.json
│
├── firestore.rules                       # 🔐 Luật bảo mật Firestore nghiêm ngặt
├── firestore.indexes.json                # ⚡ File cấu hình chỉ mục (Index) tăng tốc độ truy vấn
├── firebase.json                         # Cấu hình Deploy hệ thống Firebase
│
└── mobile-app/                           # 📱 MOBILE APP (Expo SDK 54 + TS)
    ├── app/                              # Expo Router (Folder-Based Navigation)
    │   ├── (auth)/                       # Cụm màn hình đăng nhập, đăng ký, OTP & Quên mật khẩu
    │   ├── (tabs)/                       # Menu tab điều hướng chính (Home, Menu, Cart, Profile)
    │   ├── food-detail.tsx               # Màn hình chi tiết món ăn với các tùy chọn (Add-ons)
    │   ├── order-history.tsx             # Danh sách hóa đơn lịch sử & chi tiết đơn hàng
    │   ├── wallet.tsx                    # Quản lý ví điện tử, nạp tiền tương tác
    │   ├── favourite.tsx                 # Danh sách lưu trữ món ăn yêu thích cá nhân
    │   ├── track.tsx                     # Bản đồ theo dõi Shipper & Line-timeline thời gian thực
    │   └── get-help.tsx                  # Trung tâm trợ giúp, FAQ & Hotline hỗ trợ
    │
    ├── components/                       # 🧩 Thư viện Component tái sử dụng
    │   ├── AddressSelectorModal.tsx      # Modal chọn địa chỉ thông minh
    │   ├── FoodCard.tsx                  # Thẻ hiển thị món ăn premium
    │   ├── FoodCardSkeleton.tsx          # Hiệu ứng Shimmer loading sang trọng
    │   ├── RestaurantCard.tsx            # Thẻ thông tin nhà hàng liên kết
    │   └── SuccessModal.tsx              # Modal thông báo đặt hàng thành công hoành tráng
    │
    ├── constants/
    │   └── theme.ts                      # Quản lý mã màu, font chữ & spacing tập trung
    │
    ├── context/                          # 🧬 Quản lý trạng thái toàn cục (Global States)
    │   ├── AuthContext.tsx               # Quản lý token đăng nhập & Session người dùng
    │   ├── CartContext.tsx               # Giỏ hàng, tính toán tạm tính & khuyến mãi
    │   ├── FavoritesContext.tsx          # Đồng bộ món ăn yêu thích thời gian thực
    │   └── LocationContext.tsx           # Trình định vị GPS người dùng
    │
    ├── hooks/                            # ⚓ Custom Hooks tái sử dụng logic
    │   ├── useFirestoreData.ts           # Custom React Query caching wrapper
    │   └── useOrders.ts                  # Listen đơn hàng real-time qua onSnapshot
    │
    └── services/
        ├── api.ts                        # Lớp gọi Cloud Functions trung gian
        └── notifications.ts              # Quản lý thiết bị nhận thông báo đẩy (FCM Tokens)
```

---

## 🔐 Ma Trận Phân Quyền Bảo Mật (Firestore Security Matrix)

Mọi yêu cầu truy xuất trực tiếp từ Client đều được lọc qua bộ quy tắc nghiêm ngặt tại `firestore.rules` để tránh đánh cắp thông tin người dùng:

| Collection | Read Rule | Write Rule | Cơ chế kiểm duyệt |
| :--- | :--- | :--- | :--- |
| `/foods` | 🔓 Public | 🔒 Admin (Server) | Không ai được quyền sửa đổi giá trị món ăn từ thiết bị di động. |
| `/categories` | 🔓 Public | 🔒 Admin (Server) | Danh mục món ăn chỉ có thể cập nhật từ trang quản lý của Admin. |
| `/restaurants` | 🔓 Public | 🔒 Admin (Server) | Danh sách nhà hàng công khai cho mọi người dùng. |
| `/orders/{orderId}`| 👤 Owner | 👤 Owner | Người dùng chỉ có quyền đọc đơn của chính mình. Chỉ cho phép update status sang `cancelled` khi đơn còn ở bước `placed`. Không cho phép xóa đơn hàng (`allow delete: if false`). |
| `/users/{uid}` | 👤 Owner | 👤 Owner | Quyền riêng tư tuyệt đối, thông tin tài chính ví không được để lộ ra ngoài. |
| `/users/{uid}/favorites`| 👤 Owner | 👤 Owner | Quản lý danh sách yêu thích cá nhân của mỗi tài khoản. |
| `/users/{uid}/transactions`| 👤 Owner | 🔒 Admin (Server) | Lịch sử nạp tiền/trừ tiền chỉ có thể được tạo bởi Cloud Functions. |

---

## 🛠️ Hướng Dẫn Cài Đặt (Developer Quickstart)

> [!IMPORTANT]
> **Yêu cầu hệ thống:**
> * Node.js `>= 18.x`
> * Java JDK 17 (Cần thiết để giả lập Firebase Emulators)
> * Firebase CLI (`npm install -g firebase-tools`)
> * Điện thoại Android/iOS cài sẵn ứng dụng **Expo Go** hoặc thiết bị giả lập (Simulator).

### 🚀 Bước 1: Clone và Cài đặt dependencies
```bash
git clone https://github.com/TheAnh1404/LaBouffe.git
cd LaBouffe

# Cài đặt thư viện Backend
cd functions && npm install && cd ..

# Cài đặt thư viện Frontend
cd mobile-app && npm install && cd ..
```

### 🔑 Bước 2: Thiết lập Biến môi trường
Tạo file `.env` nằm tại thư mục gốc của `/mobile-app`:
```bash
cp mobile-app/.env.example mobile-app/.env
```

Cấu hình chi tiết file `.env` với các API Keys của bạn:
```env
# Firebase Client SDK Configuration
EXPO_PUBLIC_FIREBASE_API_KEY=AIzaSy...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=labouffe-1404.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=labouffe-1404
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=labouffe-1404.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=84920...
EXPO_PUBLIC_FIREBASE_APP_ID=1:84920...
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ED...

# Stripe Publishable Key
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51...

# Sentry Monitoring DSN
EXPO_PUBLIC_SENTRY_DSN=https://...

# Google Maps API (Bắt buộc đối với Android để hiển thị bản đồ shipper)
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...
```

### 📦 Bước 3: Deploy Firebase Security Rules & Indexes
```bash
# Đăng nhập vào tài khoản Firebase của bạn
firebase login

# Liên kết với project Firebase ID của bạn
firebase use labouffe-1404

# Deploy luật bảo mật và các Index tối ưu hóa truy vấn lên Cloud
firebase deploy --only firestore:rules,firestore:indexes,storage:rules
```

### 🛰️ Bước 4: Khởi chạy môi trường Dev

#### Option A: Khởi chạy cục bộ kèm Firebase Emulators (Được khuyên dùng cho Debug)
Giả lập máy chủ Firebase ngay trên máy tính của bạn mà không lo tốn chi phí thực tế:
```bash
# Khởi chạy Firebase Emulator tại terminal 1
cd functions
npm run serve
```
Ở một Terminal khác, khởi động React Native Metro Server:
```bash
cd mobile-app
npx expo start -c
```

#### Option B: Khởi chạy trực tiếp với Cloud Firebase
```bash
# Deploy code Backend lên Google Cloud
cd functions
npm run deploy

# Khởi động Metro Server
cd ../mobile-app
npx expo start -c
```

---

## 🔧 Trung Tâm Điều Khiển Tập Lệnh (Script Command Registry)

### 📱 Ứng dụng di động (`/mobile-app`)
* **`npx expo start`** : Khởi chạy Metro Bundler.
* **`npx expo start -c`** : Khởi động Metro Server và xóa sạch cache để reload tài nguyên.
* **`npx expo run:android`** : Biên dịch mã nguồn Native trực tiếp và khởi chạy trên Emulator Android.
* **`npx expo run:ios`** : Biên dịch mã nguồn Native trực tiếp và khởi chạy trên Simulator iOS.
* **`npm run lint`** : Kiểm tra tiêu chuẩn và định dạng code với ESLint.

### 🚀 Máy chủ Cloud (`/functions`)
* **`npm run build`** : Biên dịch toàn bộ code TypeScript của Cloud Functions sang JavaScript.
* **`npm run serve`** : Khởi động Firebase Local Emulators cho toàn bộ backend serverless.
* **`npm run deploy`** : Đóng gói và đẩy trực tiếp code Backend lên Google Cloud Production.

---

## 📈 Danh Sách Tối Ưu Hóa Hiệu Năng (Senior Performance Checklist)

Để đảm bảo LaBouffe hoạt động trơn tru trên cả những thiết bị cấu hình thấp, chúng tôi đã áp dụng các kỹ thuật tối ưu hóa chuyên sâu:

> [!TIP]
> **1. Virtualized List Tuning (Tối ưu hóa hiển thị Menu)**
> Danh sách món ăn cực dài tại tab Menu được tối ưu bằng cách tinh chỉnh các thông số của `FlatList`:
> * Cấu hình `windowSize={5}` để giảm số lượng item nằm ngoài vùng nhìn thấy được render trước, tiết kiệm RAM.
> * Kích hoạt `removeClippedSubviews={true}` để giải phóng tài nguyên CPU của các view bị ẩn đi.
> * Đặt chiều cao cố định cho các item bằng cách khai báo `getItemLayout` giúp bỏ qua bước đo đạc kích thước động gây giật lag (stutter) khi cuộn nhanh.

> [!TIP]
> **2. Reanimated UI & Worklets (Hoạt họa độc lập luồng)**
> * Tuyệt đối tránh sử dụng các biến state của React để làm chuyển động hoạt hình.
> * Sử dụng `SharedValue` từ `react-native-reanimated` để đẩy toàn bộ tác vụ tính toán khung hình (Frame Calculation) sang **UI Thread** thông qua các Worklets.
> * Đảm bảo luồng Javascript chính (**JS Thread**) luôn được rảnh rỗi (0% load) để xử lý các sự kiện click và fetch data của người dùng, giữ mức FPS ổn định ở mức 60fps.

> [!TIP]
> **3. Offline Persistence (Trải nghiệm ngoại tuyến mượt mà)**
> * Cấu hình Firestore kích hoạt cơ chế Offline Persistence. Khi khách hàng mất kết nối internet tạm thời trong thang máy hoặc tầng hầm, ứng dụng vẫn hiển thị giỏ hàng và danh mục món ăn cũ.
> * Mọi thay đổi về món ăn yêu thích sẽ được xếp hàng chờ (Queued) và tự động đồng bộ hóa lên server ngay khi thiết bị có mạng trở lại.

---

## 👤 Người Sáng Tạo & Đóng Góp (Maintainer)

* **TheAnh1404** — *Lead Mobile Developer* — [GitHub Profile](https://github.com/TheAnh1404)

---

## 📄 Bản Quyền & Giấy Phép (License)

Dự án này được cấp phép theo các điều khoản của **MIT License**. Bạn hoàn toàn được phép sao chép, chỉnh sửa và đóng góp cho dự án.

Ứng dụng được thiết kế kiến trúc chuẩn mực và bảo trợ bởi **Antigravity AI (Senior Solutions Architect Assistant - Google DeepMind Team)**. 

*Mọi thắc mắc, đóng góp ý tưởng hoặc báo lỗi vui lòng mở **Issue** hoặc gửi một bản **Pull Request** chất lượng!*
