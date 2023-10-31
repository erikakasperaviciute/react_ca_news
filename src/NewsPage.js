import "./News.css";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";
import podcastImg from "./Images/podcast-image-border-min.jpg";
import { MainContext } from "./store/newsPageContext/mainContext";
import { SideBarContext } from "./store/newsPageContext/sidebarContext";

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

const podcastsArr = [
  {
    podcastImage: podcastImg,
    time: "7:55",
    podcastTitle: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
    podcastDate: "2022-02-20",
  },
  {
    podcastImage: podcastImg,
    time: "7:54",
    podcastTitle:
      "Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“",
    podcastDate: "2021-08-25",
  },
  {
    podcastImage: podcastImg,
    time: "9:22",
    podcastTitle: "Kaip gyvensime 2031-aisiais? 10 esminių prognozių",
    podcastDate: "2021-08-18",
  },
  {
    podcastImage: podcastImg,
    time: "8:32",
    podcastTitle:
      "Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“",
    podcastDate: "2021-08-11",
  },
];

const eventsArr = [
  {
    hasImage: true,
    eventImageSrc:
      "https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg",
    navLink: "#",
    date: "21",
    month: "Lap",
    location: "Vilnius, Lithuania & Online",
    eventTitle: "BIG DATA CONFERENCE EUROPE 2023",
  },
  {
    hasImage: false,
    navLink: "#",
    date: "24",
    month: "Spa",
    location: "Vilnius, Lithuania & Online",
    eventTitle: "TESTCON EUROPE 2023",
  },
  {
    hasImage: false,
    navLink: "#",
    date: "26",
    month: "Rug",
    location: "Online",
    eventTitle: "Studijos 101: karjeros pradžia su CGI",
  },
];

function NewsPage() {
  return (
    <div className="container">
      <div className="page-content-wrapper">
        <MainContext.Provider value={{ mainNewsArr, secondNewsArr }}>
          <MainContent />
        </MainContext.Provider>
        <SideBarContext.Provider value={{ podcastsArr, eventsArr }}>
          <SideBar />
        </SideBarContext.Provider>
      </div>
    </div>
  );
}

export default NewsPage;
