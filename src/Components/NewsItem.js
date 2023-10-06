import "../Styles/NewsItem.css";
function NewsItem(props) {
  return (
    <div className="news-item">
      <a href={props.navLink}>
        <div className="image-wrapper">
          <img src={props.imgSrcLink} alt={props.altDescription} />
        </div>

        <div className="news-item-content">
          <span className="news-item-category">{props.newsCategory}</span>
          <h2 className="news-item-title">{props.newsTitle}</h2>
          <span className="news-item-date">{props.newsDate}</span>
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
