# Kampüs Etkinlikleri Portalı (Sprint 8: MongoDB ve Mongoose)

**Canlı Vercel Adresi (Frontend):** [https://bekirtunakaramsal-fronted.vercel.app](https://bekirtunakaramsal-fronted.vercel.app) *(ve [https://bekir-six.vercel.app](https://bekir-six.vercel.app))*  
**GitHub Deposu:** [https://github.com/GreenDvlpr/kampus-etkinlik](https://github.com/GreenDvlpr/kampus-etkinlik)  
**Git Etiketleri (Tags):** `sprint-08`, `sprint-07`, `frontend`, `sprint-06`, `sprint-05`, `sprint-04`, `sprint-03`, `sprint-02`, `sprint-01`  

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Bölüm:** Bilgisayar Mühendisliği  
**Ders:** Web Tasarımı ve Programlama  

---

## 🚀 Proje Kurulumu ve Çalıştırma

Projede aynı depo içinde iki bağımsız uygulama yer almaktadır:
1. **Frontend:** React + Vite (localhost:5173)
2. **Backend:** Node.js + Express + Mongoose REST API (localhost:3000)

### 1. Frontend Çalıştırma
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend Çalıştırma
```bash
cd backend
npm install
npm run seed     # Veritabanını 6 örnek etkinlikle sıfırlayıp doldurur
npm run dev      # Sunucuyu izleme modunda başlatır
```

---

## 📁 Proje Klasör ve Dosya Hiyerarşisi

```text
kampus-etkinlik/
├── frontend/                        # React + Vite Tek Sayfa Uygulaması (değişmedi)
│   ├── public/
│   ├── src/
│   │   ├── components/ (layout, events, forms)
│   │   ├── context/ (EventsContext.tsx)
│   │   ├── pages/ (10 sayfa bileşeni)
│   │   ├── data/ (events.ts)
│   │   ├── types/ (campus-event.ts)
│   │   ├── utils/ (filter-events, format-date, validate-event)
│   │   ├── App.css, App.tsx, main.tsx
│   ├── package.json, vite.config.ts, vercel.json
├── backend/                         # Node.js + Express + MongoDB REST API (Sprint 8)
│   ├── src/
│   │   ├── app.js                   # Express, CORS, middleware, /health, 404, hata yakalayıcı
│   │   ├── server.js                # Veritabanı bağlantısı ve port dinleme
│   │   ├── config/
│   │   │   └── database.js          # Mongoose Atlas/yerel bağlantı modülü
│   │   ├── models/
│   │   │   └── event-model.js       # Mongoose Schema & Event modeli (kısıtlar ve timestamps)
│   │   ├── controllers/
│   │   │   └── event-controller.js  # İş mantığı (Event.find, findById, create, isValidObjectId)
│   │   ├── routes/
│   │   │   └── event-routes.js      # REST API route yönlendirmeleri
│   │   ├── data/
│   │   │   └── seed-events.js       # 6 adet özgün başlangıç etkinlik verisi
│   │   └── seed.js                  # deleteMany ve insertMany ile veritabanı tohumlama
│   ├── requests/
│   │   └── kampus-api.json          # Postman v2.1 6 adet test isteği koleksiyonu
│   ├── .env.example                 # Ortam değişkenleri şablonu (PORT=3000, MONGODB_URI)
│   ├── .gitignore                   # node_modules/ ve .env koruması (şifre sızmasını önler)
│   ├── package.json                 # express, cors, dotenv, mongoose, scriptler (dev, start, seed)
│   └── README.md                    # REST API sözleşmesi ve çalıştırma kılavuzu
├── .gitignore
├── README.md
└── vercel.json
```

---

## 📑 Backend REST API Sözleşmesi (Sprint 8)

| Method | Endpoint | Amaç | Başarılı | Hata |
|---|---|---|---|---|
| **GET** | `/health` | Sağlık kontrolü ve öğrenci no doğrulama | 200 OK | — |
| **GET** | `/events` | MongoDB'deki tüm etkinliklerin listesi (`?category=...` ile filtreli) | 200 OK | — |
| **GET** | `/events/:id` | Belirtilen MongoDB `_id`'sine sahip tekil etkinlik | 200 OK | 404 Not Found |
| **POST** | `/events` | Yeni etkinlik ekleme (Schema doğrulama kontrollü) | 201 Created | 400 Bad Request |

- **Öğrenci Doğrulama:** `GET /health` yanıtı:
  ```json
  {
    "status": "ok",
    "time": "2026-11-18T07:16:04.008Z",
    "student": "2416501428"
  }
  ```
- **Hata Formatı:** Bütün hatalar standart formatta döner:
  ```json
  {
    "error": {
      "message": "Event not found"
    }
  }
  ```

---

## ✅ Sprint 8 Teslim Kontrol Listesi

- [x] **Ön Şart 1:** GET /health'te student = `2416501428` (Öğrenci numarası tam eşleşir).
- [x] **Ön Şart 2:** Git geçmişinde gerçek Atlas adresi veya şifresi yok.
- [x] **Ön Şart 3:** `.env` ve `node_modules` GitHub'da yok (`.gitignore` ile engellendi).
- [x] **Madde 1:** Temiz indirmede `npm install` + `npm run dev` hatasız çalışıyor.
- [x] **Madde 2:** Bağlantı `src/config/database.js` içinde ayrı modülde, URI `.env`'den okunuyor, `.env.example` mevcut.
- [x] **Madde 3:** Schema'da `required`, `trim`, `timestamps` ve kısıtlar (`minlength`, `enum`, `min`) tanımlı.
- [x] **Madde 4:** `npm run seed` 6 kayıt ekliyor, iki kez çalıştırıldığında da 6 kayıt kalıyor (`deleteMany` + `insertMany`).
- [x] **Madde 5:** GET /events ve GET /events/:id MongoDB'den okuyor; olmayan ve geçersiz id için 404 dönüyor (500 değil).
- [x] **Madde 6:** POST 201 Created dönüyor; eksik veride 400 Bad Request dönüyor ve sunucu çökmüyor (hata middleware'i).
- [x] **Madde 7:** Sunucu yeniden başlayınca POST ile eklenen kayıt kalıcı kalıyor.
