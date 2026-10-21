import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

export interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

export function EventCard({ event, onShowDetail }: EventCardProps) {
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
          onShowDetail(event.id);
        }}
      >
        Detayları gör
      </a>
    </article>
  );
}

export default EventCard;
