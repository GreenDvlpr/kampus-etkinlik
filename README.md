[https://bekir-six.vercel.app](https://bekir-six.vercel.app)

# Kampüs Etkinlikleri Portalı

**Canlı Vercel Adresi:** [https://bekir-six.vercel.app](https://bekir-six.vercel.app)  
**GitHub Deposu:** [https://github.com/GreenDvlpr/kampus-etkinlik](https://github.com/GreenDvlpr/kampus-etkinlik)  
**Git Etiketleri (Tags):** `sprint-01`, `sprint-02`, `sprint-03`, `sprint-04`, `sprint-05`  

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
├── sprint2/                         # SPRINT 2 (Responsive Tasarım, CSS Grid)
├── sprint3/                         # SPRINT 3 (JavaScript & DOM Manipülasyonu)
│
└── frontend/                        # SPRINT 4 & 5 (Vite, React 19 & TypeScript Bileşen Mimarisi)
    ├── public/
    │   ├── afis.svg                 # Vektörel etkinlik afişi
    │   └── favicon.svg              # Uygulama sekme simgesi
    ├── src/
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Header.tsx       # Başlık ve alt başlık sunan üst bileşen
    │   │   │   ├── Navigation.tsx   # Menü ve sayfa geçiş butonları
    │   │   │   └── Footer.tsx       # Öğrenci künyesi bileşeni
    │   │   ├── events/
    │   │   │   ├── EventCard.tsx    # Tekil etkinlik kartı
    │   │   │   ├── EventList.tsx    # Etkinlikleri 2 sütunlu ızgarada listeleyen bileşen
    │   │   │   ├── EventFilter.tsx  # Arama ve kategori filtreleme formu
    │   │   │   └── EventDetail.tsx  # Etkinlik detay ve künye sayfası
    │   │   └── forms/
    │   │       └── EventForm.tsx    # Ekleme ve güncelleme form bileşeni
    │   ├── data/
    │   │   └── events.ts            # Tipli 6 adet etkinlik kaydı
    │   ├── types/
    │   │   ├── campus-event.ts      # Category union tipi ve CampusEvent arayüzü
    │   │   └── page.ts              # PageName sayfa adı tipi
    │   ├── utils/
    │   │   ├── filter-events.ts     # Arama ve filtreleme saf fonksiyonları
    │   │   └── format-date.ts       # Tarih biçimlendirme saf fonksiyonu
    │   ├── App.css                  # Öğrenci temalı stil kuralları
    │   ├── App.tsx                  # Ana bileşen, lifting state up & orkestrasyon
    │   ├── index.css                # Genel stil (bu sprintte boş)
    │   └── main.tsx                 # React DOM createRoot başlatıcısı
    ├── index.html                   # HTML şablonu (div#root)
    ├── vite.config.ts               # Vite yapılandırması
    ├── tsconfig.json                # TypeScript ana ayarları
    ├── tsconfig.app.json            # TypeScript frontend uygulama ayarları
    ├── tsconfig.node.json           # TypeScript node ayarları
    ├── package.json                 # Bağımlılıklar ve derleme scriptleri
    └── README.md                    # Canlı link ve dosya görev açıklamaları
```

---

## 🎨 Tasarım & CSS Değişkenleri

Öğrenci Numarası: **2416501428**

1. **Renk Tonu (`--ton`):**  
   $$\text{ton} = 2416501428 \pmod{360} = 348$$  
   - `--renk-ana: hsl(var(--ton) 65% 38%);` (Bordo / Gül kırmızısı)  
   - `--renk-zemin: hsl(var(--ton) 30% 97%);`  

2. **Yazı Tipi (`--font`):**  
   - Öğrenci numarasının son hanesi: **8**  
   - Eşleşen font: `system-ui`  
   - `--font: system-ui;`

---

## ✅ Sprint 4 Kontrol Kriterleri ve Gerçekleştirilen Şartlar

- [x] **Vite + React + TypeScript:** Proje `frontend/` klasöründe sıfırdan Vite `react-ts` şablonuyla kuruldu.
- [x] **TypeScript Tipleri:** `src/types/campus-event.ts` içinde `Category` union tipi ve `CampusEvent` arayüzü tanımlandı.
- [x] **Tipli Veri:** `src/data/events.ts` içinde 6 adet etkinlik `CampusEvent[]` tipinde tanımlandı, `import type` kullanıldı.
- [x] **Saf Fonksiyonlar:** `src/utils/filter-events.ts` dosyasında `searchEvents`, `filterByCategory` ve `findEventById` fonksiyonları DOM'a dokunmadan saf fonksiyon olarak yazıldı.
- [x] **Tek Bileşen (App.tsx):** 5 sayfanın tamamı tek `App.tsx` bileşeni içinde JSX olarak yazıldı.
- [x] **State Tabanlı Sayfa Geçişi:** React Router olmaksızın `page` state'i (`useState<PageName>`) ve `go(page, id)` fonksiyonu ile sayfa geçişleri sağlandı; sayfa yenilenmesi engellendi.
- [x] **Ana Sayfa:** Tarihe göre sıralanmış (`localeCompare`) en yakın 2 etkinlik kartı listelendi.
- [x] **Etkinlikler & Arama:** `searchText` ve `category` state'leri ile controlled input yapısı kuruldu; arama ve kategori filtreleri anlık olarak birleşik çalıştırıldı.
- [x] **Side-Effect (useEffect):** `useEffect` hook'u ile sekme başlığı (`document.title`) her sayfada ve detay sayfasında etkinliğin adına göre güncellendi.
- [x] **Detay Sayfası:** `selectedId` üzerinden etkinlik verisi bulundu; afiş yalnızca varsa (`selected.image &&`) gösterildi. "Bu etkinliği güncelle" butonu ile güncelleme sayfasına geçiş sağlandı.
- [x] **Ekle ve Güncelle Formları:** ADIM 13 gereğince `page === "add" || page === "update"` bloğunda form sadece görünüm olarak sunuldu; `onSubmit` olayında `preventDefault()` uygulandı.
- [x] **Hatasız Build:** `npm run build` komutu `tsc -b && vite build` adımlarını sıfır hata ve uyarı ile başarıyla tamamladı.

---

## 🚀 Git ve Vercel Dağıtım Kılavuzu

### 1. GitHub'a Gönderme
```bash
git add .
git commit -m "Complete sprint 4"
git tag sprint-04
git push origin master
git push origin --tags
```

### 2. Vercel'de Canlıya Alma
1. [vercel.com](https://vercel.com) adresine gidin ve `kampus-etkinlik` projenizi açın.
2. **Settings** -> **General** sekmesine gelin.
3. **Root Directory:** `sprint3` yerine **`frontend`** yapın ve kaydedin.
4. **Framework Preset:** `Other` yerine **`Vite`** seçin (Build çıktısı olarak `dist` klasörünün tanınması için şarttır).
5. **Deployments** sekmesinden yeni dağıtımın başarıyla tamamlandığını doğrulayın.
