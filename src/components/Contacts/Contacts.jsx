import { useState } from "react";
import "./ContactsStyle.css";

export const places = [
  {
    id: "1",
    post: 123123,
    town: "Санкт-Петербург",
    street: "проспект В.О.",
    house: 20,
    img: "src/assets/image-map.jpg",
  },
  {
    id: "2",
    post: 195234,
    town: "Санкт-Петербург",
    street: "ул. Ренгена",
    house: 12,
    img: "src/assets/image-map-2.jpg",
  },
];

const schedule = [
  {
    id: "1",
    dayFrom: "пн",
    dayTill: "пт",
    timeFrom: "10:00",
    timeTill: "22:00",
  },
  {
    id: "2",
    dayFrom: "сб",
    dayTill: "вс",
    timeFrom: "11:00",
    timeTill: "23:00",
  },
];

export default function Contacts() {
  const [place, setPlace] = useState(places[0]);
  function changePlace(index) {
    setPlace(places[index]);
  }
  return (
    <div className="container-contacts">
      <h2 className="title">контакты</h2>
      <div className={`container-places-map-${place.id}`}>
        <div className="text-places-and-schedule">
          <div className="places-btns">
            <h4>Адрес</h4>
            <div className="places-addresses">
              {places.map((p, index) => (
                <button
                  key={p.id}
                  className={`link-btn ${
                    place.id === p.id ? "selected-link-btn" : ""
                  }`}
                  onClick={() => changePlace(index)}
                >
                  {`${p.post}, ${p.town}, ${p.street}, ${p.house}`}
                </button>
              ))}
            </div>
          </div>
          <div className="schedule-text">
            <h4>График работы</h4>
            <div className="places-schedule">
              {schedule.map((schedule) => (
                <div className="schedule-days-time" key={schedule.id}>
                  <p className="days">{`${schedule.dayFrom}-${schedule.dayTill}`}</p>
                  <p className="time">{`${schedule.timeFrom} ---------- ${schedule.timeTill}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
