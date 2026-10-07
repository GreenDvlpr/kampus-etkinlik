import { events } from "./data.js";

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

const container = document.querySelector("#detay");
const headerTitle = document.querySelector(".site-header h1");

const id = new URLSearchParams(location.search).get("id");
const event = events.find((e) => e.id === id);

if (!event) {
  // ADIM 8: Geçersiz veya bulunamayan id durumu
  document.title = "Etkinlik bulunamadı - Kampüs Etkinlikleri";
  if (headerTitle) {
    headerTitle.textContent = "Etkinlik bulunamadı";
  }

  if (container) {
    const errorIdText = id ? `"${id}"` : 'Belirtilen';
    container.innerHTML = `
      <div class="hata-kutusu">
        <p>${errorIdText} numaralı bir etkinlik yok. Listeden bir etkinlik seçin.</p>
      </div>
      <p style="margin-top: 1.5rem;">
        <a href="etkinlikler.html" class="btn btn-liste">&larr; Listeye dön</a>
      </p>
    `;
  }
} else {
  // ADIM 8: Başarılı etkinlik detayı
  document.title = `${event.title} - Kampüs Etkinlikleri`;
  if (headerTitle) {
    headerTitle.textContent = event.title;
  }

  if (container) {
    container.innerHTML = `
      <article class="detay-kapsayici">
        <div class="detay-icerik">
          <figure>
            <img src="afis.jpg" alt="${event.title} afişi">
            <figcaption>${event.title} afişi</figcaption>
          </figure>

          <div class="detay-kunye-karti">
            <h3>Etkinlik Künyesi</h3>
            <dl>
              <dt>Tarih</dt>
              <dd>${formatDate(event.date)}, ${event.time}</dd>
              <dt>Yer</dt>
              <dd>${event.location}</dd>
              <dt>Kategori</dt>
              <dd>${event.category}</dd>
              <dt>Kontenjan</dt>
              <dd>${event.capacity} kişi</dd>
            </dl>
          </div>
        </div>

        <div class="detay-aciklama-bolumu">
          <h3>Açıklama</h3>
          <p>${event.description}</p>
        </div>

        <div class="detay-butonlar">
          <a href="etkinlikler.html" class="btn btn-liste">&larr; Listeye dön</a>
          <a href="etkinlik-guncelle.html?id=${event.id}" class="btn btn-guncelle">Bu etkinliği güncelle</a>
        </div>
      </article>
    `;
  }
}
