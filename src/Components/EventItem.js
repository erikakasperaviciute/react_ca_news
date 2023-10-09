import "../Styles/EventItem.css";
function EventItem(props) {
  const {
    hasImage,
    eventImageSrc,
    date,
    month,
    location,
    eventTitle,
    navLink,
  } = props;

  if (!eventTitle || !navLink) {
    return null;
  }
  return (
    <div className="event-item">
      <a href={navLink}>
        {hasImage && (
          <div className="image-wrapper">
            <img src={eventImageSrc} alt="" />
          </div>
        )}

        <div className="event-content">
          {date && month && (
            <div className="event-date">
              <span className="event-day">{date}</span>
              <span className="event-month">{month}</span>
            </div>
          )}

          <div className="event-info">
            {location && <span className="event-location">{location}</span>}
            <h3 className="event-title">{eventTitle}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default EventItem;
