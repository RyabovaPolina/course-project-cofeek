import BigTitle from "../BigTitle/BigTitle";
import "./AboutUsStyle.css";
import BottomButton from "../BottomButton/BottomButton";
import { aboutUsContent } from "./data/aboutUsConten";
import topleftTop from "../../assets/image-atmosphere-top-left-top.jpg";
import topleftBottom from "../../assets/image-atmosphere-top-left-bottom.jpg";
import topRight from "../../assets/image-atmosphere-top-right.jpg";
import bottomleftLeft from "../../assets/image-atmosphere-bottom-left.jpg";
import bottomleftRight from "../../assets/image-atmosphere-bottom-right.jpg";
import ourCoffeeLeft from "../../assets/image-our-coffee-left.jpg";
import ourCoffeeRight from "../../assets/image-our-coffee-right.jpg";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>О нас — Кофеёк</title>
        <meta
          name="description"
          content="Узнайте больше о концепции и ценностях кофейни Кофеёк."
        />
      </Helmet>
      <div className="container-about-us">
        <BigTitle type="about us"></BigTitle>
        <div className="top-about-us">
          <div className="top-about-us-left">
            <img
              src={
                aboutUsContent.top.images.find(
                  (image) => image.id === "about-us-1"
                )?.src
              }
              alt="img"
            />
            <p>{aboutUsContent.top.text}</p>
          </div>
          <div className="top-about-us-right">
            <img
              src={
                aboutUsContent.top.images.find(
                  (image) => image.id === "about-us-2"
                )?.src
              }
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="container-our-idea">
          <h2 className="title">{aboutUsContent.idea.title}</h2>
          <p>{aboutUsContent.idea.text}</p>
        </div>
        <div className="container-our-coffee">
          <h2 className="title">{aboutUsContent.coffee.title}</h2>
          <div>
            <p>``</p>
            <p>{aboutUsContent.coffee.text}</p>
          </div>
          <div className="container-our-coffee-images">
            <div className="container-our-coffee-images-left">
              <img src={ourCoffeeLeft} alt="image-our-coffee-left" />
            </div>
            <div className="container-our-coffee-images-right">
              <img src={ourCoffeeRight} alt="image-our-coffee-right" />
            </div>
          </div>
          <BottomButton link="/shop" name="Заказать у нас зерна"></BottomButton>
        </div>
        <div className="container-atmosphere">
          <h2 className="title">{aboutUsContent.atmosphere.title}</h2>
          <div>
            <p>``</p>
            <p>{aboutUsContent.atmosphere.text}</p>
          </div>
          <div className="container-atmosphere-images">
            <div className="container-atmosphere-images-top">
              <div className="container-atmosphere-images-top-left">
                <div className="container-atmosphere-images-top-left-top">
                  <img src={topleftTop} alt="image-atmosphere-top-left-top" />
                </div>
                <div className="container-atmosphere-images-top-left-bottom">
                  <img
                    src={topleftBottom}
                    alt="image-atmosphere-top-left-bottom"
                  />
                </div>
              </div>
              <div className="container-atmosphere-images-top-right">
                <img src={topRight} alt="image-atmpsphere-top-right" />
              </div>
            </div>
            <div className="container-atmosphere-images-bottom">
              <div className="container-atmosphere-images-bottom-left">
                <img src={bottomleftLeft} alt="image-atmpsphere-bottom-left" />
              </div>
              <div className="container-atmosphere-images-bottom-right">
                <img
                  src={bottomleftRight}
                  alt="image-atmpsphere-bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-not-just-coffee">
          <h2 className="title">{aboutUsContent.notJustCoffee.title}</h2>
          <div>
            <p>``</p>
            <p>{aboutUsContent.notJustCoffee.text}</p>
          </div>
          <div className="container-not-just-coffee-images">
            {aboutUsContent.notJustCoffee.images.map((img) => (
              <img key={img.id} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
        <BigTitle type="come to us"></BigTitle>
      </div>
    </>
  );
}
