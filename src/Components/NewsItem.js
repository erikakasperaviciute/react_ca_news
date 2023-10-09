import "../Styles/NewsItem.css";
function NewsItem(props) {
  const {
    navLink,
    imgSrcLink,
    altDescription,
    newsCategory,
    newsTitle,
    newsDate,
  } = props;

  if (!newsTitle || !navLink) {
    return null;
  }

  return (
    <div className="news-item">
      <a href={navLink}>
        {imgSrcLink && (
          <div className="image-wrapper">
            <img src={imgSrcLink} alt={altDescription} />
          </div>
        )}

        <div className="news-item-content">
          {newsCategory && (
            <span className="news-item-category">{newsCategory}</span>
          )}
          <h2 className="news-item-title">{newsTitle}</h2>
          {newsDate && <span className="news-item-date">{newsDate}</span>}
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
