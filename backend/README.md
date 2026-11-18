# Kampüs Etkinlikleri - Backend (Sprint 8: MongoDB ve Mongoose)

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Ders:** Web Teknolojileri ve Programlama 

---

## 🚀 Çalıştırma Komutları

Projeyi yerel ortamda çalıştırmak için:

```bash
# 1. backend klasörüne geçin
cd backend

# 2. Bağımlılıkları yükleyin
npm install

# 3. Veritabanını 6 örnek kayıtla doldurun (seed)
npm run seed

# 4. Geliştirme sunucusunu başlatın (--watch modu)
npm run dev

# veya üretim modunda çalıştırmak için:
npm start
```

---

## ⚙️ Ortam Değişkenleri (.env)

Sunucu portu ve veritabanı bağlantı adresi `.env` dosyası üzerinden yapılandırılır:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<kullanici>:<sifre>@<cluster>.mongodb.net/kampus
```

*(Not: Gerçek `.env` dosyası ve veritabanı şifreleri güvenlik amacıyla `.gitignore` ile korunmakta olup GitHub'a gönderilmez. Repo içinde yer tutucu şablon olarak `.env.example` sunulmuştur).*

---

## 📑 REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| **GET** | `/health` | Sunucu sağlık kontrolü ve öğrenci no | 200 | — | Aktif |
| **GET** | `/events` | Tüm etkinlikler listesi (isteğe bağlı `?category=...`, tarihe göre sıralı) | 200 | — | Aktif |
| **GET** | `/events/:id` | Belirtilen MongoDB `_id`'ye sahip tekil etkinlik | 200 | 404 | Aktif |
| **POST** | `/events` | Yeni etkinlik oluşturma (Schema doğrulamalı) | 201 | 400 | Aktif |
| **PATCH** | `/events/:id` | Etkinlik güncelleme | 200 | 400, 404 | Sprint 9 |
| **DELETE** | `/events/:id` | Etkinlik silme | 204 | 404 | Sprint 9 |

---

## 📊 HTTP Durum Kodları (Status Codes)

- **200 OK:** İstek başarılı (GET /health, GET /events, GET /events/:id).
- **201 Created:** Yeni kayıt MongoDB'de oluşturuldu, `_id` ve timestamps ile döndü (POST /events).
- **204 No Content:** İçerik yok / silme başarılı (DELETE /events/:id - Sprint 9).
- **400 Bad Request:** Mongoose şema doğrulama hatası (`ValidationError` - eksik veya kural dışı alan).
- **404 Not Found:** Kayıt veya rota bulunamadı (`isValidObjectId` false veya `findById` null).
- **500 Server Error:** Beklenmeyen sunucu hataları (hata middleware'i tarafından yakalanır).

---

## ⚠️ Hata Yanıt Formatı

Tüm hatalar standart JSON biçiminde döner:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```

Örnek 400 Şema Doğrulama Hatası:
```json
{
  "error": {
    "message": "Event validation failed: date: Path `date` is required., category: Path `category` is required."
  }
}
```

---

## 📬 Postman Test Koleksiyonu

Postman v2.1 formatındaki test istekleri `backend/requests/kampus-api.json` dosyasına eklenmiştir:
1. `GET http://localhost:3000/health` (200 OK - `student: "2416501428"`)
2. `GET http://localhost:3000/events` (200 OK - 6 kayıt, her birinde `_id`, `createdAt`, `updatedAt`)
3. `GET http://localhost:3000/events/:id` (200 OK - MongoDB `_id` ile tek etkinlik)
4. `GET http://localhost:3000/events/111111` (404 Not Found - geçersiz ID kontrolü)
5. `POST http://localhost:3000/events` (201 Created - tam veri)
6. `POST http://localhost:3000/events` (400 Bad Request - eksik veri)
