import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

export interface EventListProps {
  events: CampusEvent[];
  onShowDetail: (id: string) => void;
  emptyText: string;
}

export function EventList({ events, onShowDetail, emptyText }: EventListProps) {
  if (events.length === 0) {
    return <p className="sonuc">{emptyText}</p>;
  }

  return (
    <section className="etkinlik-grid iki-sutun">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onShowDetail={onShowDetail}
        />
      ))}
    </section>
  );
}

export default EventList;
