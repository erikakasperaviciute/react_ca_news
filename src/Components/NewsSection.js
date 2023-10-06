import LargeBtn from "./LargeBtn";
import MainNewsList from "./MainNewsList";
import SecondaryNewsList from "./SecondaryNewsList";
function NewsSection() {
  return (
    <section className="news-section">
      <h1 className="page-title">Naujienos</h1>
      <MainNewsList />
      <SecondaryNewsList />
      <LargeBtn title="Visos naujienos" />
    </section>
  );
}

export default NewsSection;
