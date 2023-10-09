import LargeBtn from "./LargeBtn";
import MainNewsList from "./MainNewsList";
import SecondaryNewsList from "./SecondaryNewsList";
import "../Styles/NewsSection.css";
function NewsSection(props) {
  return (
    <section className="news-section">
      <h1 className="page-title">Naujienos</h1>
      <MainNewsList mainNewsArr={props.mainNewsArr} />
      <SecondaryNewsList secondNewsArr={props.secondNewsArr} />
      <LargeBtn title="Visos naujienos" />
    </section>
  );
}
export default NewsSection;
