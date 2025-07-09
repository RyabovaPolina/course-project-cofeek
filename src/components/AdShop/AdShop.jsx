import { Link } from "react-router-dom";
import "./AdShopStyle.css";
import BottomButton from "../BottomButton/BottomButton";
export default function AdShop() {
  return (
    <div className="container-ad-shop">
      <img src="src/assets/image-ad-shop.jpg" alt="" />
      <div className="container-ad-shop-text">
        <h1 className="ad-title">
          <span>завари</span>
          <span>
            свой <span className="italic">кофе</span>
          </span>
        </h1>
        <p className="description">
          В нашей кофейне работает магазин, где вы найдете разнообразные сорта
          зернового кофе, а также удобные дрип-пакеты для быстрого и вкусного
          заваривания
        </p>
        <div className="ad-shop-button">
          <Link to="/shop" className="button-like-link">
            Посмотреть ассортимент
          </Link>
        </div>
      </div>
    </div>
  );
}
