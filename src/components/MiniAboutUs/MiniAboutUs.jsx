import BottomButton from "../BottomButton/BottomButton";
import "./MiniAboutUsStyle.css";
import imageMiniAboutUs from "../../assets/image-mini-about-us.jpg";

export default function MiniAboutUs() {
  return (
    <section className="mini-about-us">
      <h2 className="title">о нас</h2>
      <div className="content">
        <div className="text">
          <p className="quotation">``</p>
          <p>
            Наша кофейня создана для тех, кто любит вкусные напитки, стильную
            подачу и классную компанию. Мы варим кофе из отборных зерен,
            экспериментируем со вкусами и всегда рады новым гостям.
          </p>
          <p className="quotation">``</p>
          <p>
            У нас можно зависнуть с ноутбуком, послушать хорошую музыку или
            просто насладиться моментом с чашкой любимого латте.
          </p>
        </div>
        <img src={imageMiniAboutUs} alt="photo-abou-us" />
      </div>
      <BottomButton link="/about-us" name="Узнать больше о нас"></BottomButton>
    </section>
  );
}
