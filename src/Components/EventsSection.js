import EventItem from "./EventItem";
import LargeBtn from "./LargeBtn";
import "../Styles/EventsSection.css";

function EventsSection() {
  const eventsArr = [
    {
      hasImage: true,
      eventImageSrc:
        "https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg",
      navLink: "#",
      date: "21",
      month: "Lap",
      location: "Vilnius, Lithuania & Online",
      eventTitle: "BIG DATA CONFERENCE EUROPE 2023",
    },
    {
      hasImage: false,
      navLink: "#",
      date: "24",
      month: "Spa",
      location: "Vilnius, Lithuania & Online",
      eventTitle: "TESTCON EUROPE 2023",
    },
    {
      hasImage: false,
      navLink: "#",
      date: "26",
      month: "Rug",
      location: "Online",
      eventTitle: "Studijos 101: karjeros pradžia su CGI",
    },
  ];
  return (
    <section className="events-section">
      <h2 className="section-title">Renginiai</h2>

      <div className="events-list">
        {eventsArr.map((eventItem) => (
          <EventItem
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
