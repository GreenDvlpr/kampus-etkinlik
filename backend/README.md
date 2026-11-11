# Kampüs Etkinlikleri - Backend (Sprint 7: Express ile REST API)

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Ders:** Web Tasarımı ve Programlama  

---

## 🚀 Çalıştırma Komutları

Projeyi yerel ortamda çalıştırmak için:

```bash
# 1. backend klasörüne geçin
cd backend

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın (--watch modu)
npm run dev

# veya üretim modunda çalıştırmak için:
npm start
```

---

## ⚙️ Ortam Değişkenleri (.env)

Sunucu portu `.env` dosyası üzerinden yapılandırılır:

```env
PORT=3000
```

*(Not: Gerçek `.env` dosyası gizlilik ve güvenlik amacıyla `.gitignore` ile korunmakta olup GitHub'a gönderilmez. Şablon olarak `.env.example` sunulmuştur).*

---

## 📑 REST API Sözleşmesi

Frontend (Sprint 11'de bağlanacak) ve API istemcileri için belirlenen sözleşme tablosu:

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| **GET** | `/health` | Sunucu sağlık kontrolü ve öğrenci no | 200 | — | Aktif |
| **GET** | `/events` | Tüm etkinlikler listesi (isteğe bağlı `?category=...`) | 200 | — | Aktif |
| **GET** | `/events/:id` | Belirtilen ID'ye sahip tekil etkinlik | 200 | 404 | Aktif |
| **POST** | `/events` | Yeni etkinlik oluşturma | 201 | 400 | Aktif |
| **PATCH** | `/events/:id` | Etkinlik güncelleme | 200 | 400, 404 | Sprint 9 |
| **DELETE** | `/events/:id` | Etkinlik silme | 204 | 404 | Sprint 9 |

---

## 📊 HTTP Durum Kodları (Status Codes)

- **200 OK:** İstek başarılı (GET /health, GET /events, GET /events/:id).
- **201 Created:** Yeni kaynak başarıyla oluşturuldu (POST /events).
- **204 No Content:** İçerik yok / işlem başarılı (DELETE /events/:id - Sprint 9).
- **400 Bad Request:** Eksik ya da hatalı veri (`title`, `category`, `date` zorunludur).
- **404 Not Found:** İstenen rota veya etkinlik bulunamadı.

---

## ⚠️ Hata Yanıt Formatı

Tüm hata yanıtları standart JSON formatında döner:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```

Örnek 400 Hatası:
```json
{
  "error": {
    "message": "title, category and date are required"
  }
}
```

---

## 📬 Postman Test Koleksiyonu

Tüm 6 test isteği Postman v2.1 koleksiyonu olarak repoya eklenmiştir:
- Dosya: `backend/requests/kampus-api.json`
- İstekler:
  1. `GET http://localhost:3000/health` (200 OK)
  2. `GET http://localhost:3000/events` (200 OK)
  3. `GET http://localhost:3000/events/event-2` (200 OK)
  4. `GET http://localhost:3000/events/yok` (404 Not Found)
  5. `POST http://localhost:3000/events` (201 Created)
  6. `POST http://localhost:3000/events` (sadece title -> 400 Bad Request)
