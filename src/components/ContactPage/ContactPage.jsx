import BigTitle from "../BigTitle/BigTitle";
import "./ContactPageStyle.css";
import { places } from "../Contacts/Contacts";
import inst from "../../assets/inst.png";
import vk from "../../assets/vk.png";
import tg from "../../assets/teleg.png";
import { useState } from "react";
import Popup from "../Popup/Popup";
import { Helmet } from "react-helmet-async";

const socialNetworks = [
  {
    id: "1",
    name: "инстаграмм",
    url: "cofeek_ru",
    img: inst,
  },
  {
    id: "2",
    name: "вконтакте",
    url: "https://vk.com/cofeek_ru",
    img: vk,
  },
  {
    id: "3",
    name: "телеграмм",
    url: "@cofeek_ru",
    img: tg,
  },
];

const messages = [];

export default function ContactPage() {
  const [copy, setCopy] = useState("");
  const [showPopupCopying, setShowPopupCopying] = useState(false);
  const [showPopupMessage, setShowPopupMessage] = useState(false);

  function copyingUrl(url) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopy(url);
      })
      .catch((err) => {
        console.error("Ошибка копирования: ", err);
      });
    setShowPopupCopying(true);
  }

  function submitMessage(formData) {
    const message = {
      id: Date.now(),
      message: formData.get("message"),
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
    };
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
    setShowPopupMessage(true);
  }

  return (
    <>
      <Helmet>
        <title>Контакты — Кофеёк</title>
        <meta
          name="description"
          content="Контактная информация кофейни Кофеёк: адрес, телефон, карта, форма обратной связи."
        />
      </Helmet>
      <div className="container-contact-page">
        <BigTitle type="contact"></BigTitle>
        <div className="container-content-contact-page">
          <div className="container-contact-info">
            <h1>Мы всегда готовы помочь и ответить на ваши вопросы</h1>
            <div className="grid-info">
              <div className="call-center">
                <h4>Колл-центр</h4>
                <p>+7(777) 777-77-77</p>
                <p>+7(777) 777-77-77</p>
              </div>
              <div className="our-location">
                <h4>Наше местоположение</h4>
                {places.map((p) => (
                  <p key={p.id}>
                    {`${p.post}, ${p.town}, ${p.street}, ${p.house}`}
                  </p>
                ))}
              </div>
              <div className="email">
                <h4>Почта</h4>
                <p>cofeek_ru@gmail.com</p>
              </div>

              <div className="social-networks">
                <h4>Социальные сети</h4>
                <div className="container-networks">
                  {socialNetworks.map((netowrk) => (
                    <button
                      key={netowrk.id}
                      className="btn-network"
                      onClick={() => copyingUrl(netowrk.url)}
                    >
                      <img
                        src={netowrk.img}
                        alt={`Иконка ${netowrk.name}`}
                      ></img>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <form action={submitMessage} className="container-form-contact-page">
            <h2>Есть интересное предложение или вопрос?</h2>
            <div className="input-text">
              <label htmlFor="full-name">ФИО</label>
              <input
                type="text"
                id="full-name"
                name="name"
                placeholder="Иванова Мария Ивановна"
                required
              />
            </div>
            <div className="input-text">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="cofeek@gmail.com"
                required
              />
            </div>
            <div className="input-text">
              <label htmlFor="subject">Тема</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Сотрудничество"
              />
            </div>
            <div className="input-text">
              <label htmlFor="message">Текст сообщения</label>
              <textarea
                name="message"
                id="message"
                placeholder="Интересно посотрудничать с вами"
                required
              ></textarea>
            </div>
            <button type="submit">Отправить сообщение</button>
          </form>
        </div>
        <div className="container-contact-map">
          {places.map((place) => (
            <div key={place.id} className="map">
              <p>{`${place.post}, ${place.town}, ${place.street}, ${place.house}`}</p>
              <img src={place.img}></img>
            </div>
          ))}
        </div>
        {showPopupCopying && (
          <Popup
            title={`Ссылка ${copy} скопирована в буфер`}
            path="contacts"
            btnText="Ок"
            onClose={() => setShowPopupCopying(false)}
          ></Popup>
        )}

        {showPopupMessage && (
          <Popup
            title={`Ваше сообщение успешно отправлено. Ожидайте ответ на почте`}
            path="contacts"
            btnText="Ок"
            onClose={() => setShowPopupMessage(false)}
          ></Popup>
        )}
      </div>
    </>
  );
}
