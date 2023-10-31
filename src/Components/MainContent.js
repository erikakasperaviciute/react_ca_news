import NewsSection from "./NewsSection";
import VideoSection from "./VideoSection";
import "../Styles/MainContent.css";
function MainContent(props) {
  return (
    <main className="main-content">
      <NewsSection />
      <VideoSection />
    </main>
  );
}

export default MainContent;
