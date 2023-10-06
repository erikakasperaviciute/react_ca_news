function EventItem(props) {
  return (
    <div className="event-item">
      <a href="props.navLink">
        {props.hasImage && (
          <div className="image-wrapper">
            <img src={props.eventImageSrc} alt="" />
          </div>
        )}

        <div className="event-content">
          <div className="event-date">
            <span className="event-day">{props.date}</span>
            <span className="event-month">{props.month}</span>
          </div>

          <div className="event-info">
            <span className="event-location">{props.location}</span>
            <h3 className="event-title">{props.eventTitle}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default EventItem;
