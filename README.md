# Kampüs Etkinlikleri Portalı (Sprint 7: Express ile REST API)

**Canlı Vercel Adresi (Frontend):** [https://bekirtunakaramsal-fronted.vercel.app](https://bekirtunakaramsal-fronted.vercel.app) *(ve [https://bekir-six.vercel.app](https://bekir-six.vercel.app))*  
**GitHub Deposu:** [https://github.com/GreenDvlpr/kampus-etkinlik](https://github.com/GreenDvlpr/kampus-etkinlik)  
**Git Etiketleri (Tags):** `sprint-07`, `frontend`, `sprint-06`, `sprint-05`, `sprint-04`, `sprint-03`, `sprint-02`, `sprint-01`  

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Bölüm:** Bilgisayar Mühendisliği  
**Ders:** Web Tasarımı ve Programlama  

---

## 🚀 Proje Kurulumu ve Çalıştırma

Projede aynı depo içinde iki bağımsız uygulama yer almaktadır:
1. **Frontend:** React + Vite (localhost:5173)
2. **Backend:** Node.js + Express REST API (localhost:3000)

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
npm run dev
```

---

## 📁 Proje Klasör ve Dosya Hiyerarşisi

```text
kampus-etkinlik/
├── frontend/                        # React + Vite Tek Sayfa Uygulaması
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/ (Header, Navigation, Footer)
│   │   │   ├── events/ (EventCard, EventList, EventFilter, EventDetail)
│   │   │   └── forms/ (EventForm)
│   │   ├── context/ (EventsContext.tsx)
│   │   ├── pages/ (10 sayfa bileşeni)
│   │   ├── data/ (events.ts)
│   │   ├── types/ (campus-event.ts)
│   │   ├── utils/ (filter-events, format-date, validate-event)
│   │   ├── App.css, App.tsx, main.tsx
│   ├── package.json, vite.config.ts, vercel.json
├── backend/                         # Node.js + Express REST API (Sprint 7)
│   ├── src/
│   │   ├── app.js                   # Express yapılandırması, CORS, middleware, health
│   │   ├── server.js                # Sunucu başlatıcı ve port dinleyici
│   │   ├── routes/
│   │   │   └── event-routes.js      # REST API route tanımları
│   │   ├── controllers/
│   │   │   └── event-controller.js  # İş mantığı (getEvents, getEventById, createEvent)
│   │   └── data/
│   │       └── events.js            # Bellek içi özgün 6 etkinlik kaydı
│   ├── requests/
│   │   └── kampus-api.json          # Postman v2.1 6 adet test isteği koleksiyonu
│   ├── .env.example                 # Ortam değişkenleri şablonu (PORT=3000)
│   ├── .gitignore                   # node_modules/ ve .env koruması
│   ├── package.json                 # Backend bağımlılıkları (express, cors, dotenv)
│   └── README.md                    # REST API sözleşmesi ve çalıştırma kılavuzu
├── .gitignore
├── README.md
└── vercel.json
```

---

## 📑 Backend REST API Sözleşmesi (Sprint 7)

| Method | Endpoint | Amaç | Başarılı | Hata |
|---|---|---|---|---|
| **GET** | `/health` | Sağlık kontrolü ve öğrenci no doğrulama | 200 OK | — |
| **GET** | `/events` | Tüm etkinliklerin listesi (isteğe bağlı `?category=...`) | 200 OK | — |
| **GET** | `/events/:id` | Belirtilen ID'ye ait etkinlik detayı | 200 OK | 404 Not Found |
| **POST** | `/events` | Yeni etkinlik ekleme | 201 Created | 400 Bad Request |

- **Öğrenci Doğrulama:** `GET /health` yanıtı:
  ```json
  {
    "status": "ok",
    "time": "2026-11-11T08:17:13.707Z",
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

## ✅ Sprint 7 Teslim Kontrol Listesi

- [x] **1. Backend aynı backend/ klasöründe:** Proje kökünde `backend/` altında yapılandırıldı.
- [x] **2. npm install + npm run dev hatasız çalışıyor:** Bağımlılıklar ve dev betiği (`node --watch src/server.js`) hazır.
- [x] **3. Port .env'den okunuyor, .env.example var:** `process.env.PORT || 3000` ile okunur, `.env.example` mevcut.
- [x] **4. .env ve node_modules GitHub'da yok:** `.gitignore` ile engellendi, git status temiz.
- [x] **5. Route ve controller ayrı dosyalarda:** `event-routes.js` ve `event-controller.js` ayrıldı.
- [x] **6. En az 5 commit, adım adım atılmış:** Adım adım commit'ler oluşturuldu.
- [x] **7. GET /health JSON'unda student = senin öğrenci numaran:** `"student": "2416501428"` döner.
- [x] **8. data/events.js'te kendi 6 etkinliğin:** Başlık, yer ve açıklamalar özgün olarak tanımlandı.
- [x] **9. GET /events ve GET /events/:id çalışıyor; olmayan id 404:** Tüm testler geçti.
- [x] **10. POST /events 201; eksik veri 400:** Doğrulama ve oluşturma mantığı çalışıyor.
- [x] **11. backend/README.md'de REST sözleşmesi:** Tablo, çalıştırma komutları ve durum kodları belgelendi.
- [x] **12. 6 istek collection olarak backend/requests/kampus-api.json'da:** Postman v2.1 koleksiyonu eklendi.
