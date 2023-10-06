import podcastImg from "../Images/podcast-image-border-min.jpg";
import PodcastItem from "./PodcastItem";
import "../Styles/PodcastSection.css";

function PodcastSection() {
  return (
    <section className="podcast-section">
      <h2 className="section-title">Podcastai ir radijo laidos</h2>

      <div className="podcast-list">
        <PodcastItem
          podcastImage={podcastImg}
          time="7:55"
          podcastTitle="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          podcastDate="2022-02-20"
        />

        <PodcastItem
          podcastImage={podcastImg}
          time="7:54"
          podcastTitle="Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“"
          podcastDate="2021-08-25"
        />

        <PodcastItem
          podcastImage={podcastImg}
          time="9:22"
          podcastTitle="Kaip gyvensime 2031-aisiais? 10 esminių prognozių"
          podcastDate="2021-08-18"
        />

        <PodcastItem
          podcastImage={podcastImg}
          time="8:32"
          podcastTitle="Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“"
          podcastDate="2021-08-11"
        />
      </div>
    </section>
  );
}

export default PodcastSection;
