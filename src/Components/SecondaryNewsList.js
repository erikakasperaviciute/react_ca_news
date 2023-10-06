import "../Styles/SecondaryNewsList.css";
import NewsItem from "./NewsItem";

function SecondaryNewsList() {
  const secondNewsArr = [
    {
      navLink: "#",
      imgSrcLink:
        "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
      altDescription: "alt",
      newsCategory: "Naujienos",
      newsTitle: "Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?",
      newsDate: "2022-03-23",
    },
    {
      navLink: "#",
      imgSrcLink:
        "https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg",
      altDescription: "alt",
      newsCategory: "Technologijų ritmu",
      newsTitle:
        "Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?",
      newsDate: "2021-09-02",
    },
    {
      navLink: "#",
      imgSrcLink:
        "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg",
      altDescription: "alt",
      newsCategory: "Naujienos",
      newsTitle: "„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį",
      newsDate: "2021-11-09",
    },
    {
      navLink: "#",
      imgSrcLink:
        "https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg",
      altDescription: "alt",
      newsCategory: "Technologijų ritmu",
      newsTitle:
        "Ar skaitmeninė mada išties yra ekologiška industrijos gelbėtoja?",
      newsDate: "2021-09-02",
    },
  ];
  return (
    <div className="secondary-news-list">
      {secondNewsArr.map((secondaryNewsItem) => (
        <NewsItem
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
