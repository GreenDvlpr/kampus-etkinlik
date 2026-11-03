import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

export interface EventDetailProps {
  event: CampusEvent;
}

export function EventDetail({ event }: EventDetailProps) {
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
        <Link to="/events" className="btn btn-liste">
          &larr; Listeye dön
        </Link>
        <Link to={`/admin/${event.id}/edit`} className="btn btn-guncelle">
          Bu etkinliği güncelle
        </Link>
      </div>
    </article>
  );
}

export default EventDetail;
