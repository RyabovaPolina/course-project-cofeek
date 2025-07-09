import { useState } from "react";
import "./FooterStyle.css";
import mediaLinks from "./dataSocialMedia";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";

export default function Footer() {
  const [subscribePopup, setSubscribePopup] = useState(false);
  function submitSubscribe(formData) {
    const email = formData.get("email");
    if (email) {
      setSubscribePopup(true);
    }
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="logo-slogan">
            <div className="logotype">
              <Link to="/">
                <img src="src/assets/logo2.svg" alt="logo" />
              </Link>
            </div>
            <div className="slogan">
              <p>заварим твое настроение</p>
            </div>
            <div className="social-media">
              {mediaLinks.map((link) => (
                <button className="social-media-btn" key={link.id}>
                  {link.name}
                  <span>{link.link}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="subscribe">
            <p>Будь в курсе, подписывайся на нашу рассылку</p>
            <form action={submitSubscribe} className="subscribe-input">
              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                required
              />
              <button type="submit" className="react-button">
                {">"}
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="name-company">Ⓒcofeek 2025</div>
          <div className="page-links">
            <nav className="footer-nav">
              <Link to="/about-us">о нас</Link>
              <Link to="/shop">магазин</Link>
              <Link to="/menu">меню</Link>
              <Link to="/feedback">отзывы</Link>
              <Link to="/contacts">контакты</Link>
            </nav>
          </div>
        </div>
      </div>
      {subscribePopup && (
        <Popup
          title="Подписка на уведомления от нас включена"
          path=""
          btnText="Ок"
          onClose={() => setSubscribePopup(false)}
        />
      )}
    </footer>
  );
}
