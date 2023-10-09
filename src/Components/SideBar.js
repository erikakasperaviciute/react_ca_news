import PodcastSection from "./PodcastSection";
import EventsSection from "./EventsSection";
import "../Styles/SideBar.css";

function SideBar(props) {
  return (
    <aside className="sidebar-content">
      <PodcastSection podcastsArr={props.podcasts} />
      <EventsSection eventsArr={props.events} />
    </aside>
  );
}

export default SideBar;
