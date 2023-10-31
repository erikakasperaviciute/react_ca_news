import "../Styles/SecondaryNewsList.css";
import NewsItem from "./NewsItem";
import { useContext } from "react";
import { MainContext } from "../store/newsPageContext/mainContext";

function SecondaryNewsList() {
  const ctx = useContext(MainContext);

  const { secondNewsArr } = ctx;

  return (
    <div className="secondary-news-list">
      {secondNewsArr.map((secondaryNewsItem, index) => (
        <NewsItem
          key={index}
          navLink={secondaryNewsItem.navLink}
          imgSrcLink={secondaryNewsItem.imgSrcLink}
          altDescription={secondaryNewsItem.altDescription}
          newsCategory={secondaryNewsItem.newsCategory}
          newsTitle={secondaryNewsItem.newsTitle}
          newsDate={secondaryNewsItem.newsDate}
        />
      ))}
    </div>
  );
}
export default SecondaryNewsList;
