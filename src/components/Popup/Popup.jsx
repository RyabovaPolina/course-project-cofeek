import { Link } from "react-router-dom";
import "./PopupStyle.css";

export default function Popup(props) {
  return (
    <div className="popup-success">
      <div className="popup-content">
        <p> {props.title}!</p>
        <Link
          to={`/${props.path}`}
          className="btn-link"
          onClick={props.onClose}
        >
          {props.btnText}
        </Link>
      </div>
    </div>
  );
}
