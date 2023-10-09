import "../Styles/PodcastItem.css";
function PodcastItem(props) {
  const { podcastTitle, podcastImage, time, podcastDate } = props;

  if (!podcastTitle || !time || !podcastImage) {
    return null;
  }

  return (
    <div className="podcast-item">
      <div className="image-wrapper">
        <img src={podcastImage} alt="" />
      </div>
      <span className="podcast-length">Trukmė: {time}</span>
      <button className="podcast-play">Play</button>

      <div className="podcast-content">
        <h3 className="podcast-title">{podcastTitle}</h3>
        {time && <span className="podcast-date">{podcastDate}</span>}
      </div>
    </div>
  );
}

export default PodcastItem;
