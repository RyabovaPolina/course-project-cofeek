import BigTitle from "../BigTitle/BigTitle";
import "./MenuStyle.css";
import bakeryProducts from "../../data/bakeryProducts";
import coffeeProducts from "../../data/coffeeProducts.js";
import dessertProducts from "../../data/dessertProducts";
import { Helmet } from "react-helmet-async";

export default function Menu() {
  return (
    <>
      <Helmet>
        <title>Меню — Кофеёк</title>
        <meta
          name="description"
          content="Посмотрите меню кофейни Кофеёк: кофе, десерты, выпечка. Актуальные цены и порции."
        />
      </Helmet>
      <div className="container-menu">
        <BigTitle type="menu"></BigTitle>
        <div className="cofe-section">
          <h3>кофеек</h3>
          <span className="type-coffee">горячее</span>
          <div className="table-hot-coffee">
            {coffeeProducts.map((product) => {
              if (product.type === "hot") {
                return (
                  <div className="drink-container" key={product.id}>
                    <span className="drink-name">{product.name}</span>
                    <div className="drink-info">
                      <span className="drink-size">{product.size}</span>
                      <span className="drink-price">{product.price}</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <span className="type-coffee">холодное</span>
          <div className="table-ice-coffee">
            {coffeeProducts.map((product) => {
              if (product.type === "ice") {
                return (
                  <div className="drink-container" key={product.id}>
                    <span className="drink-name">{product.name}</span>
                    <div className="drink-info">
                      <span className="drink-size">{product.size}</span>
                      <span className="drink-price">{product.price}</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <hr />
        <div className="bakery-section">
          <h3>булочки</h3>
          <div className="table-backery">
            {bakeryProducts.map((product) => {
              return (
                <div className="bakery-container" key={product.id}>
                  <span className="bakery-name">{product.name}</span>
                  <div className="bakery-info">
                    <span className="bakery-size">
                      {product.size ? product.size : ``}
                    </span>
                    <span className="bakery-price">{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="dessert-section">
          <h3>сладенькое</h3>
          <div className="table-dessert">
            {dessertProducts.map((product) => {
              return (
                <div className="dessert-container" key={product.id}>
                  <span className="dessert-name">{product.name}</span>
                  <div className="dessert-info">
                    <span className="dessert-size">
                      {product.size ? product.size : ``}
                    </span>
                    <span className="dessert-price">{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <BigTitle type="come to us"></BigTitle>
      </div>
    </>
  );
}
