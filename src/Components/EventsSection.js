import EventItem from "./EventItem";
import LargeBtn from "./LargeBtn";
import "../Styles/EventsSection.css";

function EventsSection(props) {
  const { eventsArr } = props;
  return (
    <section className="events-section">
      <h2 className="section-title">Renginiai</h2>

      <div className="events-list">
        {eventsArr.map((eventItem, index) => (
          <EventItem
            key={index}
            hasImage={eventItem.hasImage}
            eventImageSrc={eventItem.eventImageSrc}
            navLink={eventItem.navLink}
            date={eventItem.date}
            month={eventItem.month}
            location={eventItem.location}
            eventTitle={eventItem.eventTitle}
          />
        ))}
      </div>

      <LargeBtn title="Daugiau" />
    </section>
  );
}

export default EventsSection;
