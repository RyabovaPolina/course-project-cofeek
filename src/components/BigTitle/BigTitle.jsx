import "./BigTitleStyle.css";
import about from "../../assets/about.svg";
import comeToUs from "../../assets/come-to-us.svg";
import shop from "../../assets/shop.svg";
import menu from "../../assets/menu.svg";
import orderForm from "../../assets/order_form.svg";
import auth from "../../assets/auth.svg";
import register from "../../assets/register.svg";
import user from "../../assets/user_profile.svg";
import contact from "../../assets/contact.svg";

const sources = [
  { id: "1", type: "come to us", src: comeToUs },
  { id: "2", type: "about us", src: about },
  { id: "3", type: "shop", src: shop },
  { id: "4", type: "menu", src: menu },
  { id: "5", type: "order form", src: orderForm },
  { id: "6", type: "auth", src: auth },
  { id: "7", type: "register", src: register },
  { id: "8", type: "user", src: user },
  { id: "9", type: "contact", src: contact },
];

export default function BigTitle(props) {
  const elemFromSources = sources.find((elem) => elem.type === props.type);
  return (
    <div
      className={`container-big-title${
        props.type === "auth" || props.type === "register" ? ` auth` : ``
      }`}
    >
      <img
        src={elemFromSources.src}
        alt={elemFromSources.type}
        className={`big-title${
          props.type === "auth" || props.type === "register" ? ` auth` : ``
        }`}
      />
    </div>
  );
}
