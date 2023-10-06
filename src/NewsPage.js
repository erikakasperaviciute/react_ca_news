import "./News.css";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";

function NewsPage() {
  return (
    <div className="container">
      <div className="page-content-wrapper">
        <MainContent />
        <SideBar />
      </div>
    </div>
  );
}

export default NewsPage;
