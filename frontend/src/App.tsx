import { useState, useEffect } from "react";
import "./App.css";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { events } from "./data/events";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

const HEADER_TEXTS: Partial<Record<PageName, string>> = {
  home: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.",
  events: "Ekim ayında kampüste düzenlenen etkinlikler.",
  add: "Bu sprintte form sadece görünüm; kayıt yapılmaz.",
  update: "Bu sprintte form sadece görünüm; kayıt yapılmaz.",
};

const TAB_TITLES: Record<PageName, string> = {
  home: "Ana Sayfa",
  events: "Tüm Etkinlikler",
  detail: "Etkinlik Detayı",
  add: "Etkinlik Ekle",
  update: "Etkinlik Güncelle",
};

export default function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const go = (next: PageName, id: string | null = null) => {
    setPage(next);
    setSelectedId(id);
  };

  const selected = selectedId ? findEventById(events, selectedId) : undefined;
  const headerTitle =
    page === "detail" && selected ? selected.title : page === "home" ? "Kampüs Etkinlikleri" : TAB_TITLES[page];
  const tabTitle = page === "detail" && selected ? selected.title : TAB_TITLES[page];

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri — ${tabTitle}`;
  }, [tabTitle]);

  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const filtered = filterByCategory(searchEvents(events, searchText), category);

  return (
    <>
      <Header title={headerTitle} text={HEADER_TEXTS[page]} />
      <Navigation current={page} onNavigate={go} />

      <main>
        {page === "home" && (
          <>
            <h2>Yaklaşan 2 Etkinlik</h2>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} emptyText="Yaklaşan etkinlik bulunamadı." />
            <p className="tumunu-gor">
              <a href="#events" className="btn btn-tumunu-gor" onClick={(e) => { e.preventDefault(); go("events"); }}>
                Tüm etkinlikleri gör
              </a>
            </p>
          </>
        )}

        {page === "events" && (
          <>
            <EventFilter searchText={searchText} category={category} onSearchChange={setSearchText} onCategoryChange={setCategory} />
            {filtered.length > 0 && <p className="sonuc-bilgisi">{filtered.length} etkinlik listeleniyor.</p>}
            <EventList events={filtered} onShowDetail={(id) => go("detail", id)} emptyText="Aramanıza uygun etkinlik bulunamadı." />
          </>
        )}

        {page === "detail" && (
          <EventDetail event={selected} onBack={() => go("events")} onEdit={(id) => go("update", id)} />
        )}

        {(page === "add" || page === "update") && <EventForm onSubmit={() => go("events")} />}
      </main>

      <Footer />
    </>
  );
}
