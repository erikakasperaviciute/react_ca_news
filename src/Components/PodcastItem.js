import "../Styles/PodcastItem.css";
function PodcastItem(props) {
  if (!props.podcastTitle || !props.time || !props.podcastImage) {
    return null;
  }
  return (
    <div className="podcast-item">
      <div className="image-wrapper">
        <img src={props.podcastImage} alt="" />
      </div>
      <span className="podcast-length">Trukmė: {props.time}</span>
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">{props.podcastTitle}</h3>
        {props.time && (
          <span className="podcast-date">{props.podcastDate}</span>
        )}
      </div>
    </div>
  );
}

export default PodcastItem;
