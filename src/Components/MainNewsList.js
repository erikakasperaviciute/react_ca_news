import NewsItem from "./NewsItem";
import "../Styles/MainNewsList.css";
function MainNewsList() {
  const mainNewsArr = [
    {
      navLink: "#",
      imgSrcLink:
        "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
      altDescription: "alt",
      newsCategory: "AI & Deep learning",
      newsTitle: "Ar „ChatGPT“ užims mūsų darbo vietas?",
      newsDate: "2023-01-27",
    },
    {
      navLink: "#",
      imgSrcLink:
        "https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg",
      altDescription: "alt",
      newsCategory: "Naujienos",
      newsTitle:
        "Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?",
      newsDate: "2023-01-27",
    },
  ];
  return (
    <div className="main-news-list">
      {mainNewsArr.map((mainNewsItem) => (
        <NewsItem
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
