import { useState, useEffect } from "react";
import "./App.css";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { events } from "./data/events";
import {
  searchEvents,
  filterByCategory,
  findEventById,
} from "./utils/filter-events";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

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

  const headerText =
    page === "home"
      ? "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin."
      : page === "events"
      ? "Ekim ayında kampüste düzenlenen etkinlikler."
      : page === "add" || page === "update"
      ? "Bu sprintte form sadece görünüm; kayıt yapılmaz."
      : undefined;

  const tabTitle =
    page === "home"
      ? "Ana Sayfa"
      : page === "events"
      ? "Tüm Etkinlikler"
      : page === "detail"
      ? selected?.title || "Etkinlik Detayı"
      : page === "add"
      ? "Etkinlik Ekle"
      : "Etkinlik Güncelle";

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri — ${tabTitle}`;
  }, [tabTitle]);

  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  const filtered = filterByCategory(
    searchEvents(events, searchText),
    category
  );

  return (
    <>
      <Header title={headerTitle} text={headerText} />
      <Navigation current={page} onNavigate={go} />

      <main>
        {/* ANA SAYFA */}
        {page === "home" && (
          <>
            <h2>Yaklaşan 2 Etkinlik</h2>

            <EventList
              events={upcoming}
              onShowDetail={(id) => go("detail", id)}
              emptyText="Yaklaşan etkinlik bulunamadı."
            />

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
            <EventFilter
              searchText={searchText}
              category={category}
              onSearchChange={setSearchText}
              onCategoryChange={setCategory}
            />

            {filtered.length > 0 && (
              <p className="sonuc-bilgisi">
                {filtered.length} etkinlik listeleniyor.
              </p>
            )}

            <EventList
              events={filtered}
              onShowDetail={(id) => go("detail", id)}
              emptyText="Aramanıza uygun etkinlik bulunamadı."
            />
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
          <EventDetail
            event={selected}
            onBack={() => go("events")}
            onEdit={(id) => go("update", id)}
          />
        )}

        {/* EKLE VE GÜNCELLE SAYFALARI */}
        {(page === "add" || page === "update") && (
          <EventForm onSubmit={() => go("events")} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
