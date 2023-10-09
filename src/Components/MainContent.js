import NewsSection from "./NewsSection";
import VideoSection from "./VideoSection";
import "../Styles/MainContent.css";
function MainContent(props) {
  return (
    <main className="main-content">
      <NewsSection
        mainNewsArr={props.mainNews}
        secondNewsArr={props.secondaryNews}
      />
      <VideoSection />
    </main>
  );
}

export default MainContent;
