import '../css/EventCard.css';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card__date">
        {event.date}
      </div>
      <h3 className="event-card__title">
        {event.title}
      </h3>
      <p className="event-card__description">
        {event.description}
      </p>
    </div>
  );
}
