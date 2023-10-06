import arrowIcon from "../Images/arrow-icon.svg";
function LargeBtn(props) {
  return (
    <a href="#" className="large-button">
      <span>{props.title}</span>
      <img src={arrowIcon} alt="" />
    </a>
  );
}

export default LargeBtn;
