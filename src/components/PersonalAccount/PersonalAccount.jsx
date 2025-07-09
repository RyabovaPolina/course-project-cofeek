import "./PersonalAccountStyle.css";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { productsDripCoffee, productsCorns } from "../Shop/dataProductsShop";
import imageProductCorns from "../../assets/image-corns.jpg";
import imageProductDrip from "../../assets/image-drip-coffee.jpg";
import imageUser from "../../assets/user.png";
import BigTitle from "../BigTitle/BigTitle";
import NeedToAuth from "../NeedToAuth/NeedToAuth";

export default function PersonalAccount() {
  const { user, logout } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  function getOrders() {
    fetch("https://682a216aab2b5004cb35ef06.mockapi.io/api/coffee-shop/order")
      .then((response) => {
        if (!response.ok) {
          throw new Error("чета не так");
        }
        return response.json();
      })
      .then((orders) => {
        setUserOrders(
          orders.filter((order) => {
            return order.userId === user.id;
          })
        );
        setShowOrders(true);
      })
      .catch((error) => console.error(error.message));
  }

  function exitFromAccount() {
    logout();
  }

  if (!user) {
    return <NeedToAuth></NeedToAuth>;
  }

  const userOrdersElement = userOrders.map((order, index) => {
    let product = null;
    let productType = "";
    let productImage = "";
    let productName = "";
    let productQuantity = 0;
    let productPrice = 0;
    if (order.productType === "corn") {
      product = productsCorns.find((product) => product.id === order.productId);
      productType = "зерна";
      productImage = imageProductCorns;
      productName = product.name;
      productQuantity = product.quantity;
      productPrice = product.price;
    } else {
      const product = productsDripCoffee.find(
        (product) => product.id === order.productId
      );
      productType = "дрип-кофе";
      productImage = imageProductDrip;
      productName = product.name;
      productQuantity = product.quantity;
      productPrice = product.price;
    }
    return (
      <div className="container-user-order" key={order.id}>
        <div className="container-order-image">
          <img src={productImage} alt="" />
        </div>
        <div className="container-order-information">
          <p>Заказ #{index + 1}</p>
          <p>
            {productType} {productName} - {productQuantity}
          </p>
          <p>цена: {productPrice}</p>
          <p>адрес: {order.address ? order.address : order.place}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container-personal-account">
      <BigTitle type="user"></BigTitle>
      <div className="container-profile">
        <div className="container-profile-image">
          <img src={imageUser} alt="" />
        </div>
        <div className="container-profile-information">
          <h3>имя: {user.name}</h3>
          <h3>фамилия: {user.surname}</h3>
          <h3>город: {user.town}</h3>
          <h3>email: {user.email}</h3>
          <div className="container-profile-btns">
            <button onClick={getOrders}>Показать мои заказы</button>
            <button onClick={exitFromAccount} className="exit">
              Выйти из аккаунта
            </button>
          </div>
          <div className="container-user-orders">
            {showOrders &&
              (userOrders.length > 0 ? (
                userOrdersElement
              ) : (
                <p>У вас пока нет заказов</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
