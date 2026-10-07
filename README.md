# Kampüs Etkinlikleri Portalı

**Canlı Vercel Adresi:** [https://kampus-etkinlik-2416501428.vercel.app](https://kampus-etkinlik-2416501428.vercel.app) *(veya Vercel tarafından atanan canlı bağlantınız)*  
**GitHub Deposu:** [https://github.com/GreenDvlpr/kampus-etkinlik](https://github.com/GreenDvlpr/kampus-etkinlik)  
**Git Etiketleri (Tags):** `sprint-01`, `sprint-02`, `sprint-03`  

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Bölüm:** Bilgisayar Mühendisliği / Bilişim Sistemleri  
**Ders:** Web Tasarımı ve Programlama  

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
├── sprint2/                         # SPRINT 2 (Responsive Tasarım, CSS Grid)
│   ├── index.html                   # Ana Sayfa (Kart görünümü, 2 sütun desktop / 1 sütun mobil)
│   ├── etkinlikler.html             # Tüm Etkinlikler (3 sütun desktop / 1 sütun mobil)
│   ├── etkinlik-detay.html          # Detay Sayfası (Masaüstü yan yana, mobil alt alta)
│   ├── etkinlik-ekle.html           # Etkinlik Ekleme Formu (Üstte label, hata kontrolü)
│   ├── etkinlik-guncelle.html       # Etkinlik Güncelleme Formu (Dolu alanlar)
│   ├── afis.jpg                     # Etkinlik afiş görseli
│   └── css/
│       ├── numaran.css              # Hesaplanan özel renk ve font değişkenli ana CSS
│       └── 2416501428.css           # Öğrenci numarası adıyla yedek CSS dosyası
│
└── sprint3/                         # SPRINT 3 (JavaScript & DOM Manipülasyonu)
    ├── index.html                   # Ana Sayfa (data-limit="2" ile tarihi en yakın 2 etkinlik)
    ├── etkinlikler.html             # Tüm Etkinlikler (Dinamik arama + kategori filtresi)
    ├── etkinlik-detay.html          # Etkinlik Detayı (?id= ile dinamik veri, hata yönetimi)
    ├── etkinlik-ekle.html           # Etkinlik Ekleme (JS doğrulama, hata/başarı mesajı)
    ├── etkinlik-guncelle.html       # Etkinlik Güncelleme (data-mode="guncelle", form doldurma)
    ├── afis.jpg                     # Etkinlik afiş görseli
    ├── css/
    │   ├── numaran.css              # Responsive stiller, hata/başarı kutuları ve rozetler
    │   └── 2416501428.css           # Öğrenci numarası adıyla CSS dosyası
    └── js/
        ├── data.js                  # 6 adet detaylı etkinlik verisi (events dizisi)
        ├── event-list.js            # Kart üretimi, tarih sıralaması, arama & filtreleme
        ├── event-detail.js          # URLSearchParams(?id=) ile dinamik detay & hata kutusu
        └── event-form.js            # Form doğrulama, JSON çıktısı, güncelleme modu
```

---

## 🎨 Tasarım & CSS Değişkenleri

Öğrenci Numarası: **2416501428**

1. **Renk Tonu (`--ton`):**  
   $$\text{ton} = 2416501428 \pmod{360} = 348$$  
   - `--renk-ana: hsl(var(--ton) 65% 38%);`
   - `--renk-zemin: hsl(var(--ton) 30% 97%);`

2. **Yazı Tipi (`--font`):**  
   - Öğrenci numarasının son hanesi: **8**  
   - Eşleşen font: `system-ui`  
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

### Sprint 3 (JavaScript ve DOM):
- [x] **data.js ile 6 Etkinlik:** Her nesnede `id`, `title`, `category`, `date`, `time`, `location`, `capacity`, `description` alanları tam ve benzersizdir.
- [x] **Dinamik Kart Üretimi:** HTML'den statik kartlar tamamen temizlenmiş, kartlar `event-list.js` tarafından veriden üretilmektedir.
- [x] **Ana Sayfa (data-limit="2"):** Etkinlik dizisi kopyalanarak tarihe göre sıralanmış (`localeCompare`) ve yaklaşan 2 etkinlik listelenmiştir.
- [x] **Arama + Kategori Filtresi:** `input` ve `change` olaylarıyla başlık, açıklama ve yer alanlarında Türkçe uyumlu (`toLocaleLowerCase("tr-TR")`) arama ve kategori filtrelemesi birlikte çalışır.
- [x] **Sonuç Bilgisi & Bulunamadı Mesajı:** Listelenen etkinlik sayısı anlık güncellenir, eşleşme yoksa "Aramanıza uygun etkinlik bulunamadı." uyarısı gösterilir.
- [x] **?id= ile Dinamik Detay Sayfası:** `URLSearchParams` ile `id` okunur; `event-detail.js` doğru etkinliği açar, başlık ve sekmeyi günceller.
- [x] **Geçersiz ID Hata Yönetimi:** Var olmayan veya eksik `id` verildiğinde kırmızı hata kutusu gösterilir, sayfa çökmez ve "Listeye dön" butonu sunulur.
- [x] **Form Doğrulama (event-form.js):** `novalidate` ile tarayıcı balonları kapatılmış; boş/kısa alanlarda kırmızı kenarlık (`aria-invalid`) ve alan altında özel hata mesajı çıkar. Sayfa yenilenmez (`preventDefault`).
- [x] **Başarı Durumu (JSON Çıktısı):** Form doğru doldurulduğunda yeşil kutuda oluşturulan etkinlik nesnesi `JSON.stringify` ile gösterilir.
- [x] **Güncelleme Sayfası:** Detay sayfasındaki "Bu etkinliği güncelle" butonu ile form o etkinliğin verileriyle dolu açılır. `id`siz erişildiğinde uyarı kutusu gösterilir.
- [x] **Sıfır localStorage & Sıfır Framework:** Vanilla JavaScript ve ES modülleri (`type="module"`) kullanılmıştır.

---

## 🚀 Git ve Vercel Dağıtım Kılavuzu

### 1. GitHub'a Gönderme
```bash
git add .
git commit -m "Sprint3 yapıldı"
git tag sprint-03
git push origin master
git push origin --tags
```

### 2. Vercel'de Canlıya Alma
1. [vercel.com](https://vercel.com) adresine gidin ve projenizi açın.
2. **Settings** -> **General** sekmesine gelin.
3. **Root Directory** ayarını `sprint2` yerine **`sprint3`** olarak güncelleyip kaydedin.
4. Yeni bir dağıtım tetiklenerek siteniz anında Sprint 3 JavaScript fonksiyonlarıyla yayına alınacaktır.
