# Kampüs Etkinlikleri Portalı (Sprint 6 + Vize Teslimi)

**Canlı Vercel Adresi:** [https://bekir-six.vercel.app](https://bekir-six.vercel.app)  
**Alternatif / Standart Domain:** [https://bekirtunakaramsal-frontend.vercel.app](https://bekirtunakaramsal-frontend.vercel.app)  
**GitHub Deposu:** [https://github.com/GreenDvlpr/kampus-etkinlik](https://github.com/GreenDvlpr/kampus-etkinlik)  
**Git Etiketleri (Tags):** `frontend`, `sprint-06`, `sprint-05`, `sprint-04`, `sprint-03`, `sprint-02`, `sprint-01`  

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Bölüm:** Bilgisayar Mühendisliği / Bilişim Sistemleri  
**Ders:** Web Tasarımı ve Programlama (Frontend Vize Projesi)  

---

## 🚀 Proje Kurulumu ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için:

```bash
# 1. frontend klasörüne geçin
cd frontend

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

Derleme (build) kontrolü için:
```bash
npm run build
```

---

## 🗺️ Route Haritası (10 Adres, 10 Sayfa)

Projede `react-router-dom` (v7) kullanılarak 10 farklı rota tanımlanmış ve SPA yapısı kurulmuştur:

| # | Adres | Sayfa Bileşeni | Açıklama |
|---|---|---|---|
| 1 | `/` | `HomePage` | Ana sayfa: Tarihe göre en yakın 2 etkinlik kartı ve tüm etkinliklere bağlantı |
| 2 | `/events` | `EventsPage` | Etkinlik arama metni ve kategori filtresi ile tam liste |
| 3 | `/events/:id` | `EventDetailPage` | `useParams` ile dinamik detay, listeye dön ve güncelle bağlantıları |
| 4 | `/admin` | `AdminPage` | Etkinlik yönetim tablosu (mobilde kart görünümü), silme (`window.confirm`) |
| 5 | `/admin/new` | `AddEventPage` | Yeni etkinlik ekleme formu (kontrollü form ve doğrulama) |
| 6 | `/admin/:id/edit` | `EditEventPage` | Seçilen etkinliği güncelleme formu (`useParams` ve kontrollü form) |
| 7 | `/login` | `LoginPage` | Kontrollü e-posta ve şifre doğrulamalı giriş formu |
| 8 | `/register` | `RegisterPage` | Ad Soyad, e-posta, şifre ve şifre tekrar eşleşme kontrollü kayıt formu |
| 9 | `/forgot-password` | `ForgotPasswordPage` | E-posta doğrulama kontrollü şifremi unuttum sayfası |
| 10 | `*` | `NotFoundPage` | Tanımsız tüm adresler için 404 Sayfa Bulunamadı uyarısı ve ana sayfaya dönüş |

---

## 📁 Proje Klasör ve Dosya Yapısı

Ders yönergesi ve slaytlardaki (Adım 17 / Slayt 21) hiyerarşik yapıya eksiksiz uyulmuştur:

```text
frontend/
├── public/
│   ├── afis.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Üst başlık alanı
│   │   │   ├── Navigation.tsx       # NavLink tabanlı aktif link destekli menü
│   │   │   └── Footer.tsx           # Bekir Tuna Karamsal - 2416501428 · 2026
│   │   ├── events/
│   │   │   ├── EventCard.tsx        # Link to={`/events/${event.id}`} kartı
│   │   │   ├── EventList.tsx        # Etkinlik ızgarası veya boş durum mesajı
│   │   │   ├── EventFilter.tsx      # Arama ve kategori filtre formu
│   │   │   └── EventDetail.tsx      # Etkinlik detay kartı, Link butonları
│   │   └── forms/
│   │       └── EventForm.tsx        # Controlled form, aria-invalid ve hata gösterimi
│   ├── context/
│   │   └── EventsContext.tsx        # Global state (events, addEvent, updateEvent, deleteEvent)
│   ├── pages/
│   │   ├── HomePage.tsx             # /
│   │   ├── EventsPage.tsx           # /events
│   │   ├── EventDetailPage.tsx      # /events/:id
│   │   ├── AdminPage.tsx            # /admin
│   │   ├── AddEventPage.tsx         # /admin/new
│   │   ├── EditEventPage.tsx        # /admin/:id/edit
│   │   ├── LoginPage.tsx            # /login
│   │   ├── RegisterPage.tsx         # /register
│   │   ├── ForgotPasswordPage.tsx   # /forgot-password
│   │   └── NotFoundPage.tsx         # *
│   ├── data/
│   │   └── events.ts                # Başlangıç etkinlik verileri
│   ├── types/
│   │   └── campus-event.ts          # Category, CampusEvent, EventFormData, EventFormErrors
│   ├── utils/
│   │   ├── filter-events.ts         # Arama ve filtreleme saf fonksiyonları
│   │   ├── format-date.ts           # Tarih formatlama saf fonksiyonu
│   │   └── validate-event.ts        # Etkinlik form doğrulama kuralları
│   ├── App.css                      # Öğrenci temalı CSS, responsive masaüstü/mobil tablo
│   ├── App.tsx                      # Yalnızca Header, Navigation, Routes, Footer (State yok)
│   ├── index.css                    # Sıfırlama ve genel stil
│   └── main.tsx                     # BrowserRouter ve EventsProvider sarmalayıcısı
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## 🎨 Öğrenci Numarasına Göre Tasarım & CSS Değişkenleri

**Öğrenci Numarası:** `2416501428`

1. **Renk Tonu (`--ton`):**  
   $$\text{ton} = 2416501428 \pmod{360} = 348$$  
   - `--renk-ana: hsl(var(--ton) 65% 38%);` (Bordo tonu)  
   - `--renk-zemin: hsl(var(--ton) 30% 97%);`  
   - `--renk-hata: #c92a2a;`  

2. **Yazı Tipi (`--font`):**  
   - Numaranın son hanesi: **8**  
   - Eşleşen font ailesi: `system-ui`  
   - `--font: system-ui;`

---

## ✅ Vize Teslim Kontrol Listesi (13/13 Tamamlandı)

- [x] **1. Tüm linkler çalışıyor:** NavLink ve Link bileşenleri tam entegre; sayfa yenilenmeden geçiş yapılır.
- [x] **2. Tüm sayfalar hazır:** 10 sayfa bileşeninin tümü eksiksiz oluşturuldu.
- [x] **3. Klasör ve dosya yapısı oluşturuldu:** Slayt 21'deki hiyerarşik yapı birebir uygulandı.
- [x] **4. Tüm route'lar (10 adet) tanımlandı:** App.tsx içinde 10 route tanımlandı.
- [x] **5. Context kullanıldı ve tüm sayfalara bağlandı:** EventsContext ile global state yönetimi kuruldu.
- [x] **6. Ekle, sil, güncelle ve silmeden önce onay çalışıyor:** Tabloda sil butonunda window.confirm sorulur; eklenen/silinen/güncellenen etkinlikler anında Ana Sayfa ve Etkinlikler sayfasına yansır.
- [x] **7. Son çalışır proje GitHub'a gönderildi:** master ve main branch'lerine push edildi.
- [x] **8. Proje Vercel'de yayında:** Canlı URL aktif ve SPA yönlendirmeleri vercel.json ile yapılandırıldı.
- [x] **9. README yazıldı, Vercel linki README'ye eklendi:** Canlı Vercel linki, kurulum ve route tablosu eklendi.
- [x] **10. Mobil görünüm doğru çalışıyor:** Masaüstünde <table>, 699px altında blok kart düzenine (data-baslik ile) otomatik geçer.
- [x] **11. CSS bozulması yok:** Renk paleti, paddingler, header margin-collapse ve form stilleri kusursuz.
- [x] **12. Arama ve filtreleme çalışıyor:** Etkinlikler sayfasında başlık arama ve kategori seçimi anlık filtreler.
- [x] **13. Form doğrulama çalışıyor:** Etkinlik formu, giriş, kayıt ve şifremi unuttum sayfalarında aria-invalid ve .hata-metni ile doğrulama kuralları aktif.
