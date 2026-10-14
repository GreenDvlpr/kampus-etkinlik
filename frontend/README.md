[https://kampus-etkinlik-2416501428.vercel.app](https://kampus-etkinlik-2416501428.vercel.app)

# Kampüs Etkinlikleri - Frontend (Sprint 4: Vite, React & TypeScript)

**Öğrenci Adı Soyadı:** Bekir Tuna Karamsal  
**Öğrenci Numarası:** 2416501428  
**Ders:** Web Tasarımı ve Programlama  

---

## 📁 Proje Dosyaları ve Görevleri (Adım 2)

- **`package.json`**: Proje adı, çalıştırılabilir npm scriptleri (`dev`, `build`, `preview`) ve bağımlılık paket listesini tanımlar.
- **`package-lock.json`**: Projede yüklenen tüm npm paketlerinin kilitli tam sürümlerini ve bütünlük karmalarını tutar.
- **`node_modules/`**: İndirilen üçüncü parti paketlerin yer aldığı klasördür; `.gitignore` ile korunur ve GitHub'a yüklenmez.
- **`tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`**: TypeScript derleyicisinin tip kontrol kurallarını ve proje ayarlarını belirler.
- **`vite.config.ts`**: Vite geliştirme ve üretim ortamı ayarlarını ve `@vitejs/plugin-react` eklentisini yapılandırır.
- **`index.html`**: Tek sayfa uygulamasının (SPA) başlangıç HTML şablonudur; içinde `div#root` kapsayıcısı yer alır.
- **`src/main.tsx`**: React uygulamasını başlatır ve `App` ana bileşenini `createRoot` ile `root` elemanına bağlar.
- **`src/App.tsx`**: Uygulamanın ana bileşenidir; 5 sayfanın (Ana Sayfa, Etkinlikler, Detay, Ekle, Güncelle) JSX çizimini ve state yönetimini içerir.
- **`src/App.css`**: Uygulamanın stillerini barındırır; öğrenci numarasına göre hesaplanan renk tonu ve yazı tipiyle Sprint 3 CSS kurallarını içerir.
- **`src/index.css`**: Genel sayfa stilleri için ayrılmıştır; Vite varsayılan stillerinin temayı bozmaması için bu sprintte boş bırakılmıştır.
- **`public/`**: Web sunucusuna doğrudan kopyalanan statik dosyaları (`afis.svg`, `favicon.svg`, görseller) içerir.
- **`src/types/campus-event.ts`**: Etkinlik veri modeli için `Category` ve `CampusEvent` TypeScript tiplerini tanımlar.
- **`src/data/events.ts`**: Tipli 6 adet kampüs etkinliği kaydını dizi halinde sunar.
- **`src/utils/filter-events.ts`**: Arama, kategori filtreleme ve ID'ye göre bulma işlevlerini gerçekleştiren saf yardımcı fonksiyonları içerir.
