import PodcastSection from "./PodcastSection";
import EventsSection from "./EventsSection";
import "../Styles/SideBar.css";

function SideBar() {
  return (
    <aside className="sidebar-content">
      <PodcastSection />
      <EventsSection />
    </aside>
  );
}

export default SideBar;
