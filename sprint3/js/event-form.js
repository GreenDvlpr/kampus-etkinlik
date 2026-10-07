import { events } from "./data.js";

const form = document.querySelector("#etkinlik-formu");
const formMesaj = document.querySelector("#form-mesaj");

if (form) {
  const isGuncelle = form.dataset.mode === "guncelle";
  let mevcutEtkinlik = null;

  if (isGuncelle) {
    // ADIM 11: Güncelleme modu kontrolü
    const id = new URLSearchParams(location.search).get("id");
    mevcutEtkinlik = events.find((e) => e.id === id);

    if (!mevcutEtkinlik) {
      // id yoksa veya eşleşen etkinlik bulunamadıysa uyarı göster
      form.outerHTML = `
        <div class="hata-kutusu">
          <p>Güncellenecek etkinlik seçilmedi. Önce listeden bir etkinlik seçin, detay sayfasındaki "Bu etkinliği güncelle" butonunu kullanın.</p>
        </div>
        <p style="margin-top: 1.5rem;">
          <a href="etkinlikler.html" class="btn btn-liste">Etkinliklere git</a>
        </p>
      `;
    } else {
      // Alanları mevcut etkinlik bilgileriyle doldur
      if (form.elements.ad) form.elements.ad.value = mevcutEtkinlik.title;
      if (form.elements.kategori) form.elements.kategori.value = mevcutEtkinlik.category;
      if (form.elements.tarih) form.elements.tarih.value = mevcutEtkinlik.date;
      if (form.elements.saat) form.elements.saat.value = mevcutEtkinlik.time;
      if (form.elements.yer) form.elements.yer.value = mevcutEtkinlik.location;
      if (form.elements.kontenjan) form.elements.kontenjan.value = mevcutEtkinlik.capacity || "";
      if (form.elements.aciklama) form.elements.aciklama.value = mevcutEtkinlik.description || "";
    }
  }

  // Submit işlemi ve doğrulama
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const errors = {};

    const adVal = fd.get("ad") ? fd.get("ad").trim() : "";
    const kategoriVal = fd.get("kategori") || "";
    const tarihVal = fd.get("tarih") || "";
    const saatVal = fd.get("saat") || "";
    const yerVal = fd.get("yer") ? fd.get("yer").trim() : "";
    const kontenjanVal = fd.get("kontenjan") ? fd.get("kontenjan").trim() : "";
    const aciklamaVal = fd.get("aciklama") ? fd.get("aciklama").trim() : "";

    // ADIM 10 Doğrulama Kuralları
    if (adVal.length < 3) {
      errors.ad = "Etkinlik adı en az 3 karakter olmalı.";
    }

    if (!kategoriVal) {
      errors.kategori = "Bir kategori seçin.";
    }

    if (!tarihVal) {
      errors.tarih = "Tarih seçin.";
    }

    if (!saatVal) {
      errors.saat = "Saat seçin.";
    }

    if (!yerVal) {
      errors.yer = "Yer bilgisini yazın.";
    }

    let parsedKontenjan = null;
    if (kontenjanVal !== "") {
      parsedKontenjan = Number(kontenjanVal);
      if (isNaN(parsedKontenjan) || parsedKontenjan < 1 || parsedKontenjan > 1000) {
        errors.kontenjan = "Kontenjan 1 ile 1000 arasında olmalıdır.";
      }
    }

    // Hata mesajlarını ve aria-invalid durumlarını güncelleme
    const alanlar = ["ad", "kategori", "tarih", "saat", "yer", "kontenjan"];
    alanlar.forEach((alanAdi) => {
      const el = form.elements[alanAdi];
      const hataSpan = document.querySelector(`#${alanAdi}-hata`);

      if (errors[alanAdi]) {
        if (el) el.setAttribute("aria-invalid", "true");
        if (hataSpan) hataSpan.textContent = errors[alanAdi];
      } else {
        if (el) el.removeAttribute("aria-invalid");
        if (hataSpan) hataSpan.textContent = "";
      }
    });

    if (Object.keys(errors).length > 0) {
      if (formMesaj) {
        formMesaj.innerHTML = "";
      }
      return;
    }

    // Başarı Durumu
    const data = {
      id: isGuncelle && mevcutEtkinlik ? mevcutEtkinlik.id : `event-${events.length + 1}`,
      title: adVal,
      category: kategoriVal,
      date: tarihVal,
      time: saatVal,
      location: yerVal,
      capacity: parsedKontenjan,
      description: aciklamaVal
    };

    if (formMesaj) {
      const baslikMetni = isGuncelle
        ? "Etkinlik güncellendi (bu sprintte kaydedilmez):"
        : "Etkinlik oluşturuldu (bu sprintte kaydedilmez):";

      formMesaj.innerHTML = `
        <div class="basari-kutusu">
          <p>${baslikMetni}</p>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </div>
      `;
    }
  });
}
