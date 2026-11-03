import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

export interface EventCardProps {
  event: CampusEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="kart">
      <h3>{event.title}</h3>
      <span className="kategori-etiket">{event.category}</span>
      <p className="kart-tarih">
        Tarih: {formatDate(event.date)}, {event.time}
      </p>
      <p className="kart-yer">Yer: {event.location}</p>
      <p className="kart-kontenjan">Kontenjan: {event.capacity} kişi</p>
      <p className="kart-aciklama">{event.description}</p>
      <Link to={`/events/${event.id}`} className="detay-link">
        Detayları gör
      </Link>
    </article>
  );
}

export default EventCard;
