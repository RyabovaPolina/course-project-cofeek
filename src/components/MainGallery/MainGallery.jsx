import "./MainGalleryStyle.css";
import imageCenter from "../../assets/image-center.png";
import imageBrewYourMood from "../../assets/brew_your_mood.svg";

export default function MainGallery() {
  return (
    <>
      <div className="coffee-promo">
        <div className="image-block-left">
          <div className="img-left-top"></div>
          <div className="img-left-bottom"></div>
        </div>

        <div className="vertical-text">
          <img src={imageCenter} className="img-center" alt="image-center" />
        </div>

        <div className="image-block-right">
          <div className="img-right-top"></div>
          <div className="img-right-bottom"></div>
        </div>
      </div>
      <div className="horizontal-text">
        <img src={imageBrewYourMood} alt="brew-your-mood" />
      </div>
    </>
  );
}
