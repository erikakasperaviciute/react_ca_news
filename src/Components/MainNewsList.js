import NewsItem from "./NewsItem";
import "../Styles/MainNewsList.css";
function MainNewsList(props) {
  const { mainNewsArr } = props;
  return (
    <div className="main-news-list">
      {mainNewsArr.map((mainNewsItem, index) => (
        <NewsItem
          key={index}
          navLink={mainNewsItem.navLink}
          imgSrcLink={mainNewsItem.imgSrcLink}
          altDescription={mainNewsItem.altDescription}
          newsCategory={mainNewsItem.newsCategory}
          newsTitle={mainNewsItem.newsTitle}
          newsDate={mainNewsItem.newsDate}
        />
      ))}
    </div>
  );
}

export default MainNewsList;
