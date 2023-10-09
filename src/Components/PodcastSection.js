import PodcastItem from "./PodcastItem";
import "../Styles/PodcastSection.css";

function PodcastSection(props) {
  const { podcastsArr } = props;
  return (
    <section className="podcast-section">
      <h2 className="section-title">Podcastai ir radijo laidos</h2>
      <div className="podcast-list">
        {podcastsArr.map((podcast, index) => (
          <PodcastItem
            key={index}
            podcastImage={podcast.podcastImage}
            time={podcast.time}
            podcastTitle={podcast.podcastTitle}
            podcastDate={podcast.podcastDate}
          />
        ))}
      </div>
    </section>
  );
}

export default PodcastSection;
