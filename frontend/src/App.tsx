import { useState, useEffect } from "react";
import "./App.css";
import type { CampusEvent, Category } from "./types/campus-event";
import { events } from "./data/events";
import {
  searchEvents,
  filterByCategory,
  findEventById,
} from "./utils/filter-events";

type PageName = "home" | "events" | "detail" | "add" | "update";

function formatDate(dateStr: string): string {
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    return d.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return dateStr;
}

export function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
  }

  const selected = selectedId ? findEventById(events, selectedId) : undefined;

  const headerTitle =
    page === "home"
      ? "Kampüs Etkinlikleri"
      : page === "events"
      ? "Tüm Etkinlikler"
      : page === "detail"
      ? selected?.title || "Etkinlik Detayı"
      : page === "add"
      ? "Etkinlik Ekle"
      : "Etkinlik Güncelle";

  const title =
    page === "home"
      ? "Ana Sayfa"
      : page === "events"
      ? "Tüm Etkinlikler"
      : page === "detail"
      ? selected?.title || "Etkinlik Detayı"
      : page === "add"
      ? "Etkinlik Ekle"
      : "Etkinlik Güncelle";

  // ADIM 11: Sekme başlığı side-effect
  useEffect(() => {
    document.title = `Kampüs Etkinlikleri — ${title}`;
  }, [title]);

  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  const categories = [...new Set(events.map((e) => e.category))];

  const filtered = filterByCategory(
    searchEvents(events, searchText),
    category
  );

  function renderCard(event: CampusEvent) {
    return (
      <article className="kart" key={event.id}>
        <h3>{event.title}</h3>
        <span className="kategori-etiket">{event.category}</span>
        <p className="kart-tarih">
          Tarih: {formatDate(event.date)}, {event.time}
        </p>
        <p className="kart-yer">Yer: {event.location}</p>
        <p className="kart-kontenjan">Kontenjan: {event.capacity} kişi</p>
        <p className="kart-aciklama">{event.description}</p>
        <a
          href={`#detail-${event.id}`}
          className="detay-link"
          onClick={(e) => {
            e.preventDefault();
            go("detail", event.id);
          }}
        >
          Detayları gör
        </a>
      </article>
    );
  }

  const menuItems: { id: PageName; label: string }[] = [
    { id: "home", label: "Ana Sayfa" },
    { id: "events", label: "Etkinlikler" },
    { id: "add", label: "Ekle" },
  ];

  return (
    <>
      <header className="site-header">
        <h1>{headerTitle}</h1>
        <nav className="site-nav">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={page === item.id ? "aktif" : ""}
              aria-current={page === item.id ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                go(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* ANA SAYFA */}
        {page === "home" && (
          <>
            <p className="aciklama-metin">
              Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.
            </p>

            <h2>Yaklaşan 2 Etkinlik</h2>

            <section className="etkinlik-grid iki-sutun">
              {upcoming.map(renderCard)}
            </section>

            <p className="tumunu-gor">
              <a
                href="#events"
                className="btn btn-tumunu-gor"
                onClick={(e) => {
                  e.preventDefault();
                  go("events");
                }}
              >
                Tüm etkinlikleri gör
              </a>
            </p>
          </>
        )}

        {/* ETKİNLİKLER SAYFASI */}
        {page === "events" && (
          <>
            <p className="aciklama-metin">
              Ekim ayında kampüste düzenlenen etkinlikler.
            </p>

            <form
              className="filtre-karti"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="filtre-alanlari">
                <div className="filtre-grup">
                  <label htmlFor="search-input">Etkinlik ara</label>
                  <input
                    type="search"
                    id="search-input"
                    placeholder="Örn. atölye, kariyer"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>

                <div className="filtre-grup">
                  <label htmlFor="category-select">Kategori</label>
                  <select
                    id="category-select"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value as Category | "")
                    }
                  >
                    <option value="">Tümü</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>

            <p
              className={`sonuc-bilgisi ${
                filtered.length === 0 ? "sonuc-yok" : ""
              }`}
            >
              {filtered.length === 0
                ? "Aramanıza uygun etkinlik bulunamadı."
                : `${filtered.length} etkinlik listeleniyor.`}
            </p>

            <section className="etkinlik-grid iki-sutun">
              {filtered.map(renderCard)}
            </section>
          </>
        )}

        {/* DETAY SAYFASI */}
        {page === "detail" && !selected && (
          <div className="hata-kutusu">
            <p>Etkinlik bulunamadı. Listeden bir etkinlik seçin.</p>
            <p style={{ marginTop: "1.5rem" }}>
              <a
                href="#events"
                className="btn btn-liste"
                onClick={(e) => {
                  e.preventDefault();
                  go("events");
                }}
              >
                &larr; Listeye dön
              </a>
            </p>
          </div>
        )}

        {page === "detail" && selected && (
          <article className="detay-kapsayici">
            <div className="detay-icerik">
              {selected.image && (
                <figure>
                  <img
                    src={selected.image}
                    alt={`${selected.title} afişi`}
                  />
                  <figcaption>{selected.title} afişi</figcaption>
                </figure>
              )}

              <div className="detay-kunye-karti">
                <h3>Etkinlik Künyesi</h3>
                <dl>
                  <dt>Tarih</dt>
                  <dd>
                    {formatDate(selected.date)}, {selected.time}
                  </dd>
                  <dt>Yer</dt>
                  <dd>{selected.location}</dd>
                  <dt>Kategori</dt>
                  <dd>{selected.category}</dd>
                  <dt>Kontenjan</dt>
                  <dd>{selected.capacity} kişi</dd>
                </dl>
              </div>
            </div>

            <div className="detay-aciklama-bolumu">
              <h3>Açıklama</h3>
              <p>{selected.description}</p>
            </div>

            <div className="detay-butonlar">
              <a
                href="#events"
                className="btn btn-liste"
                onClick={(e) => {
                  e.preventDefault();
                  go("events");
                }}
              >
                &larr; Listeye dön
              </a>
              <a
                href="#update"
                className="btn btn-guncelle"
                onClick={(e) => {
                  e.preventDefault();
                  go("update", selected.id);
                }}
              >
                Bu etkinliği güncelle
              </a>
            </div>
          </article>
        )}

        {/* EKLE VE GÜNCELLE SAYFALARI (ADIM 13) */}
        {(page === "add" || page === "update") && (
          <>
            <p className="aciklama-metin">
              Bu sprintte form sadece görünüm; kayıt yapılmaz.
            </p>

            <form
              className="form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-grup">
                <label htmlFor="title">Etkinlik Adı</label>
                <input
                  id="title"
                  placeholder="Örn. Kariyer Günleri 2026"
                  maxLength={80}
                />
              </div>

              <div className="form-grup">
                <label htmlFor="category">Kategori</label>
                <select id="category">
                  <option value="">Seçiniz</option>
                  <option value="Seminer">Seminer</option>
                  <option value="Atölye">Atölye</option>
                  <option value="Söyleşi">Söyleşi</option>
                  <option value="Yarışma">Yarışma</option>
                </select>
              </div>

              <div className="form-grup">
                <label htmlFor="date">Tarih</label>
                <input type="date" id="date" />
              </div>

              <div className="form-grup">
                <label htmlFor="time">Saat</label>
                <input type="time" id="time" />
              </div>

              <div className="form-grup">
                <label htmlFor="location">Yer</label>
                <input
                  id="location"
                  placeholder="Örn. A Blok Konferans Salonu"
                />
              </div>

              <div className="form-grup">
                <label htmlFor="capacity">Kontenjan</label>
                <input type="number" id="capacity" />
              </div>

              <div className="form-grup">
                <label htmlFor="description">Açıklama</label>
                <textarea id="description" rows={5} />
              </div>

              <button type="submit" className="btn btn-kaydet">
                Kaydet
              </button>
            </form>
          </>
        )}
      </main>

      <footer>
        <p>Bekir Tuna Karamsal · 2416501428 · 2026</p>
      </footer>
    </>
  );
}

export default App;
