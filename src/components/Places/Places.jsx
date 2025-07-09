import { useState } from "react";
import "./Places.css";
import BottomButton from "../BottomButton/BottomButton";
import places from "./dataPlaces";

export default function Places() {
  const [index, setIndex] = useState(0);
  const place = places[index];

  function changePlace() {
    setIndex((prevIndex) => (prevIndex + 1) % places.length);
  }

  return (
    <div className="container-places">
      <h2 className="title">точки</h2>
      <h4 className="place-name">{place.name}</h4>
      <hr />
      <div className="photo-container">
        <div className="image-place-left">
          {place.images.slice(0, 2).map((image, index) => (
            <div className="img-wrapper" key={`${place.id}-${index}`}>
              <img src={image} alt="place" />
            </div>
          ))}
        </div>
        <div className="image-place-right">
          {place.images.slice(2, 4).map((image, index) => (
            <div className="img-wrapper" key={place.id + index}>
              <img src={image} alt="place" />
            </div>
          ))}
        </div>
      </div>
      <BottomButton link="/" name="Далее" onClick={changePlace}></BottomButton>
    </div>
  );
}
