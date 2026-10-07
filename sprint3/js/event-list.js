import { events } from "./data.js";

// Tarihi Türkçe formatına çeviren yardımcı fonksiyon (Örn: "12 Ekim 2026")
function formatDate(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  }
  return dateStr;
}

// Tek bir etkinlik kartı üreten şablon fonksiyonu
function createCard(event) {
  return `
    <article class="kart">
      <h3>${event.title}</h3>
      <span class="kategori-etiket">${event.category}</span>
      <p class="kart-tarih">Tarih: ${formatDate(event.date)}, ${event.time}</p>
      <p class="kart-yer">Yer: ${event.location}</p>
      <p class="kart-kontenjan">Kontenjan: ${event.capacity} kişi</p>
      <p class="kart-aciklama">${event.description}</p>
      <a href="etkinlik-detay.html?id=${event.id}" class="detay-link">Detayları gör</a>
    </article>
  `;
}

const list = document.querySelector("#etkinlik-listesi");

// Kartları container içerisine basan fonksiyon
function render(dizi) {
  if (!list) return;
  list.innerHTML = dizi.map(createCard).join("");
}

// ADIM 5: Ana sayfa kontrolü (data-limit="2")
if (list && list.dataset.limit) {
  const limit = Number(list.dataset.limit);
  const yaklasan = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit);
  render(yaklasan);
} else if (list) {
  // ADIM 6 & 7: Etkinlikler sayfası - arama ve filtreleme
  const aramaInput = document.querySelector("#arama");
  const kategoriSelect = document.querySelector("#kategori-filtre");
  const sonucSatiri = document.querySelector("#sonuc");
  const filtreFormu = document.querySelector("#filtre-formu");

  // Kategorileri veriden dinamik üretme (new Set)
  if (kategoriSelect) {
    const categories = [...new Set(events.map((e) => e.category))];
    categories.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      kategoriSelect.appendChild(option);
    });
  }

  function filtrele() {
    const aranan = aramaInput ? aramaInput.value.trim().toLocaleLowerCase("tr-TR") : "";
    const secilenKategori = kategoriSelect ? kategoriSelect.value : "";

    const sonuc = events.filter((e) => {
      const baslikUyuyor = e.title.toLocaleLowerCase("tr-TR").includes(aranan);
      const aciklamaUyuyor = e.description.toLocaleLowerCase("tr-TR").includes(aranan);
      const yerUyuyor = e.location.toLocaleLowerCase("tr-TR").includes(aranan);
      const metinUyuyor = !aranan || baslikUyuyor || aciklamaUyuyor || yerUyuyor;

      const kategoriUyuyor = !secilenKategori || e.category === secilenKategori;

      return metinUyuyor && kategoriUyuyor;
    });

    render(sonuc);

    if (sonucSatiri) {
      if (sonuc.length === 0) {
        sonucSatiri.textContent = "Aramanıza uygun etkinlik bulunamadı.";
        sonucSatiri.className = "sonuc-bilgisi sonuc-yok";
      } else {
        sonucSatiri.textContent = `${sonuc.length} etkinlik listeleniyor.`;
        sonucSatiri.className = "sonuc-bilgisi";
      }
    }
  }

  if (aramaInput) aramaInput.addEventListener("input", filtrele);
  if (kategoriSelect) kategoriSelect.addEventListener("change", filtrele);
  if (filtreFormu) filtreFormu.addEventListener("submit", (e) => e.preventDefault());

  // İlk yüklemede tüm etkinlikleri listele
  render(events);
  if (sonucSatiri) {
    sonucSatiri.textContent = `${events.length} etkinlik listeleniyor.`;
    sonucSatiri.className = "sonuc-bilgisi";
  }
}
