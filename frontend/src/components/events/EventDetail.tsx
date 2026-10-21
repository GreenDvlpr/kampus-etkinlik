import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

export interface EventDetailProps {
  event?: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

export function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  if (!event) {
    return (
      <div className="hata-kutusu">
        <p>Etkinlik bulunamadı. Listeden bir etkinlik seçin.</p>
        <p style={{ marginTop: "1.5rem" }}>
          <a
            href="#events"
            className="btn btn-liste"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            &larr; Listeye dön
          </a>
        </p>
      </div>
    );
  }

  return (
    <article className="detay-kapsayici">
      <div className="detay-icerik">
        {event.image && (
          <figure>
            <img src={event.image} alt={`${event.title} afişi`} />
            <figcaption>{event.title} afişi</figcaption>
          </figure>
        )}

        <div className="detay-kunye-karti">
          <h3>Etkinlik Künyesi</h3>
          <dl>
            <dt>Tarih</dt>
            <dd>
              {formatDate(event.date)}, {event.time}
            </dd>
            <dt>Yer</dt>
            <dd>{event.location}</dd>
            <dt>Kategori</dt>
            <dd>{event.category}</dd>
            <dt>Kontenjan</dt>
            <dd>{event.capacity} kişi</dd>
          </dl>
        </div>
      </div>

      <div className="detay-aciklama-bolumu">
        <h3>Açıklama</h3>
        <p>{event.description}</p>
      </div>

      <div className="detay-butonlar">
        <a
          href="#events"
          className="btn btn-liste"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          &larr; Listeye dön
        </a>
        <a
          href="#update"
          className="btn btn-guncelle"
          onClick={(e) => {
            e.preventDefault();
            onEdit(event.id);
          }}
        >
          Bu etkinliği güncelle
        </a>
      </div>
    </article>
  );
}

export default EventDetail;
