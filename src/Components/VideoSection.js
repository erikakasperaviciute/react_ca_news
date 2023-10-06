import LargeBtn from "./LargeBtn";
function VideoSection() {
  return (
    <section className="video-section">
      <h2 className="section-title">Vaizdo įrašai</h2>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/b8dGCsP75HA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <h3 className="section-sub-title">Jeigu galiu aš - gali ir tu!</h3>
      <LargeBtn title="Visi vaizdo įrašai" />
    </section>
  );
}

export default VideoSection;
