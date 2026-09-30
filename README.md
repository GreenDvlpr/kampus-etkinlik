# Kampüs Etkinlikleri Portalı

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Bölüm:** Bilgisayar Mühendisliği / Bilişim Sistemleri  
**Ders:** Web Tasarımı ve Programlama  

---

## 🌐 Canlı Bağlantılar (Teslim Bilgileri)

- **Canlı Vercel Adresi:** [https://kampus-etkinlik-2416501428.vercel.app](https://kampus-etkinlik-2416501428.vercel.app) *(veya Vercel tarafından atanan canlı bağlantınız)*
- **GitHub Deposu:** [https://github.com/GreenDvlpr/kampus-etkinlik](https://github.com/GreenDvlpr/kampus-etkinlik)
- **Git Etiketleri (Tags):** `sprint-01`, `sprint-02`

---

## 📁 Proje Klasör Yapısı

```text
kampus-etkinlik/
│
├── .gitignore
├── README.md
│
├── sprint1/                         # SPRINT 1 (Yalnızca Saf HTML, Sıfır CSS, Sıfır JS)
│   ├── index.html                   # Ana Sayfa (Yaklaşan etkinlikler, çerçeveli tablo)
│   ├── etkinlikler.html             # Tüm Etkinlikler (Tüm etkinlikler listesi)
│   ├── etkinlik-detay.html          # Etkinlik Detay (figure, img, dl/dt/dd, article)
│   ├── etkinlik-ekle.html           # Etkinlik Ekleme Formu (form, label, required)
│   ├── etkinlik-guncelle.html       # Etkinlik Güncelleme Formu (value dolu alanlar)
│   └── afis.jpg                     # Etkinlik afiş görseli
│
└── sprint2/                         # SPRINT 2 (Responsive Tasarım, CSS Grid)
    ├── index.html                   # Ana Sayfa (Kart görünümü, 2 sütun desktop / 1 sütun mobil)
    ├── etkinlikler.html             # Tüm Etkinlikler (3 sütun desktop / 1 sütun mobil)
    ├── etkinlik-detay.html          # Detay Sayfası (Masaüstü yan yana, mobil alt alta)
    ├── etkinlik-ekle.html           # Etkinlik Ekleme Formu (Üstte label, hata kontrolü)
    ├── etkinlik-guncelle.html       # Etkinlik Güncelleme Formu (Dolu alanlar)
    ├── afis.jpg                     # Etkinlik afiş görseli
    └── css/
        ├── numaran.css              # Hesaplanan özel renk ve font değişkenli ana CSS
        └── 2416501428.css           # Öğrenci numarası adıyla yedek CSS dosyası
```

---

## 🎨 Sprint 2: Numara, Renk ve Font Hesaplaması

Öğrenci Numarası: **2416501428**

1. **Renk Tonu (`--ton`):**  
   $$\text{ton} = 2416501428 \pmod{360} = 348$$  
   - `--renk-ana: hsl(var(--ton) 65% 38%);` (Gül kırmızısı / fuşya tonu)  
   - `--renk-zemin: hsl(var(--ton) 30% 97%);` (Açık ve yumuşak arka plan)

2. **Yazı Tipi (`--font`):**  
   - Öğrenci numarasının son hanesi: **8**  
   - Tablo eşleşmesi: `8 -> system-ui`  
   - `--font: system-ui;`

```css
/* Bekir Tuna Karamsal — 2416501428 */
:root {
  --no: 2416501428;
  --ton: 348;
  --ton: mod(var(--no), 360);
  --renk-ana: hsl(var(--ton) 65% 38%);
  --renk-zemin: hsl(var(--ton) 30% 97%);
  --font: system-ui;
  --bosluk-m: 1rem;
  --kose: 8px;
}
body { font-family: var(--font); }
```

---

## ✅ Kontrol Kriterleri ve Gerçekleştirilen Şartlar

### Sprint 1:
- [x] **5 Sayfa:** `index.html`, `etkinlikler.html`, `etkinlik-detay.html`, `etkinlik-ekle.html`, `etkinlik-guncelle.html`
- [x] **Kırık bağlantı yok:** Sayfalar arası menü ve detay bağlantıları sorunsuz çalışır.
- [x] **Her sayfada tek `<h1>`:** Semantik başlık sırası korundu.
- [x] **Form ve Label:** Tüm input ve select alanlarının görünür `<label>` etiketleri `for` niteliğiyle bağlıdır.
- [x] **Required doğrulaması:** Boş bırakılamaz alanlarda HTML5 `required` niteliği aktiftir.
- [x] **Tablo şablonu:** Etkinlikler `<table border="1">` içinde, aynı sırada hücrelerle sunulmuştur.
- [x] **Sıfır CSS ve JavaScript:** Tamamen saf tarayıcı varsayılanı (Times New Roman, mavi linkler).

### Sprint 2:
- [x] **Tablodan Karta Geçiş:** Geçici tablo kaldırıldı; `<section>` ve `<article>` ile CSS Grid kart düzeni kuruldu.
- [x] **Mobil Öncelikli & Taşmasız:** Telefonda tek sütun, yatay kaydırma (horizontal scroll) kesinlikle yok.
- [x] **Geniş Ekran Uyumu:** Masaüstünde ana sayfa 2 sütun, tüm etkinlikler 3 sütun olarak dizilir.
- [x] **Detay Sayfası:** Afiş görseli solda, etkinlik künyesi (`<dl>`) sağda; telefonda ise alt alta hizalanır.
- [x] **Erişilebilir Form & Butonlar:** Dokunmatik ekranlar için min. 44px basma alanları ve boş/hatalı alanlarda kırmızı kenarlık (`--renk-hata`).
- [x] **CSS Değişkenleri:** Tüm renkler ve boşluklar `var(--...)` ile tanımlıdır.

---

## 🚀 Git ve Vercel Dağıtım Kılavuzu

### 1. GitHub'a Gönderme
```bash
git add .
git commit -m "Sprint2 yapıldı"
git tag sprint-02
git remote add origin https://github.com/KULLANICI_ADINIZ/REPOSU.git
git push -u origin main --tags
```

### 2. Vercel'de Canlıya Alma
1. [vercel.com](https://vercel.com) adresine gidin ve GitHub hesabınızla giriş yapın.
2. **Add New...** -> **Project** butonuna tıklayın ve bu depoyu seçin.
3. **Framework Preset:** `Other` (Build komutu yok).
4. **Root Directory:**
   - Sprint 1 testi için: `sprint1`
   - Sprint 2 testi için: `sprint2` *(Settings -> Root Directory üzerinden güncellenebilir)*
5. **Deploy** butonuna basarak anında canlı URL'nizi alın.
