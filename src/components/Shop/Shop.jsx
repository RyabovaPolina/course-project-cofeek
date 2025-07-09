import { useNavigate } from "react-router-dom";
import "./ShopStyle.css";
import BigTitle from "../BigTitle/BigTitle";
import { productsCorns, productsDripCoffee } from "./dataProductsShop";
import imageProductCorns from "../../assets/image-corns.jpg";
import imageProductDrip from "../../assets/image-drip-coffee.jpg";
import { Helmet } from "react-helmet-async";

export default function Shop() {
  const navigate = useNavigate();

  function handleOrderClick(product, typeProduct, imgSrc) {
    navigate("/order", { state: { product, typeProduct, imgSrc } });
  }

  function elementLayout(element, imgSrc, type) {
    return (
      <div className="container-element" key={element.id}>
        <div className="name-and-photo">
          <span>{element.name}</span>
          <img src={imgSrc} alt="" />
        </div>
        <hr />
        <div className="quantity-and-price">
          <span className="element-quantity">{element.quantity}</span>
          <span>{`${element.price}р`}</span>
        </div>
        <button
          className="button-react"
          onClick={() => handleOrderClick(element, type, imgSrc)}
        >
          заказать
        </button>
      </div>
    );
  }
  const cornElement = productsCorns.map((corn) =>
    elementLayout(corn, imageProductCorns, "corn")
  );
  const dripCoffeeElement = productsDripCoffee.map((coffee) =>
    elementLayout(coffee, imageProductDrip, "drip")
  );
  return (
    <>
      <Helmet>
        <title>Магазин — Кофеёк</title>
        <meta
          name="description"
          content="Интернет-магазин Кофейка: зерновой кофе, дрип-пакеты. Удобный заказ и быстрая доставка."
        />
      </Helmet>
      <div className="container-shop">
        <BigTitle type="shop"></BigTitle>
        <div className="container-shop-corns">
          <h2 className="title">зерна</h2>
          <div className="container-corns-elements">{cornElement}</div>
        </div>
        <div className="container-shop-drips">
          <h2 className="title">дрип-кофе</h2>
          <div className="container-drips-elements">{dripCoffeeElement}</div>
        </div>
        <BigTitle type="come to us"></BigTitle>
      </div>
    </>
  );
}
