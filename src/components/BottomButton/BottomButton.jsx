import { Link } from "react-router-dom";
import "./BottomButtonStyle.css";

export default function BottomButton(props) {
  return (
    <div className="bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 978 20" fill="none">
        <path
          d="M0 9.75676H976M976 9.75676L951.327 1M976 9.75676L951.327 19"
          stroke="#564735"
        />
      </svg>
      <Link
        to={props.link}
        onClick={props.onClick}
        className="button-like-link"
      >
        {props.name}
      </Link>
    </div>
  );
}
