import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

export function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  }

  return (
    <>
      <h2 className="bolum-baslik">Etkinlik Yönetimi</h2>

      <p style={{ marginBottom: "1rem" }}>
        <Link to="/admin/new" className="btn btn-tumunu-gor">
          + Yeni etkinlik
        </Link>
      </p>

      {events.length === 0 ? (
        <p className="sonuc">Henüz etkinlik yok.</p>
      ) : (
        <table className="tablo">
          <thead>
            <tr>
              <th>Etkinlik</th>
              <th>Tarih</th>
              <th>Kategori</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td data-baslik="Etkinlik">{event.title}</td>
                <td data-baslik="Tarih">
                  {formatDate(event.date)} {event.time}
                </td>
                <td data-baslik="Kategori">{event.category}</td>
                <td data-baslik="İşlemler" className="islemler">
                  <Link
                    to={`/admin/${event.id}/edit`}
                    className="btn btn-guncelle"
                  >
                    Düzenle
                  </Link>
                  <button
                    type="button"
                    className="btn btn-sil buton-sil"
                    onClick={() => handleDelete(event.id, event.title)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default AdminPage;
