import { useState, useEffect } from "react";
import "./OrderFormStyle.css";
import { useLocation } from "react-router-dom";
import BigTitle from "../BigTitle/BigTitle";
import { Link } from "react-router-dom";
import { deliveryTypes, paymentTypes } from "./dataForOrder";
import places from "../Places/dataPlaces";
import { useAuth } from "../../context/AuthContext";
import NeedToAuth from "../NeedToAuth/NeedToAuth";

export default function OrderForm() {
  const [selectedDelivery, setSelectedDelivery] = useState({});
  const [selectedPayment, setSelectedPayment] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [town, setTown] = useState("");
  const { user } = useAuth();
  const location = useLocation();
  const product = location.state?.product;
  const productType = location.state?.typeProduct;
  const typeProduct =
    location.state?.typeProduct === "corn" ? "зерна" : "дрип-кофе";
  const image = location.state?.imgSrc;

  useEffect(() => {
    if (user) {
      setName(`${user.name}`);
      setSurname(`${user.surname}`);
      setEmail(user.email || "");
      setPhoneNumber(user.phone || "");
      setTown(user.town || "");
    }
  }, [user]);

  function submitOrder(formData) {
    const order = {
      id: Date.now(),
      delivery: formData.get("delivery"),
      payment: formData.get("payment"),
      comment: formData.get("comment"),
      address: formData.get("address"),
      productId: product.id,
      productType: productType,
      place: formData.get("place"),
      userId: user.id,
    };

    fetch("https://682a216aab2b5004cb35ef06.mockapi.io/api/coffee-shop/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Ошибка при отправке заказа");
        return response.json();
      })
      .then((data) => {
        alert("Заказ оформлен успешно!");
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Что-то пошло не так при отправке заказа.");
      });
  }
  return (
    <div className="container-main-order-form">
      <Link to="/shop" style={{ textAlign: "left" }} className="back-to-shop">
        ← Обратно в магазин
      </Link>
      {user !== null ? (
        <>
          <BigTitle type="order form"></BigTitle>
          <form action={submitOrder} className="container-order-form">
            <section className="contact-data">
              <h2>Контактные данные</h2>
              <span>*Обязательные поля</span>
              <div className="contact-data-inputs">
                <label htmlFor="contact-data-name">
                  <input
                    type="text"
                    name="name"
                    id="contact-data-name"
                    placeholder="Имя*"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label htmlFor="contact-data-surname">
                  <input
                    type="text"
                    name="surname"
                    id="contact-data-surname"
                    placeholder="Фамилия*"
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </label>
                <label htmlFor="contact-data-email">
                  <input
                    type="text"
                    name="email"
                    id="contact-data-email"
                    placeholder="Почта*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="contact-data-phone-number">
                  <input
                    type="text"
                    name="phone-number"
                    id="contact-data-phone-number"
                    placeholder="Телефон*"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
                <label htmlFor="contact-data-town">
                  <input
                    type="text"
                    name="town"
                    id="contact-data-town"
                    placeholder="Город*"
                    required
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                  />
                </label>
              </div>
            </section>
            <section className="container-delivery">
              <h2>Способ доставки</h2>
              <div className="delivery-inputs">
                {deliveryTypes.map((delivery) => (
                  <div className="delivery-radio-input" key={delivery.id}>
                    <input
                      type="radio"
                      name="delivery"
                      id={`${delivery.name}-delivery`}
                      value={delivery.name}
                      checked={selectedDelivery === delivery}
                      onChange={(e) => setSelectedDelivery(delivery)}
                    />
                    <label htmlFor={`${delivery.name}-delivery`}>
                      {`${delivery.type} - ${
                        delivery.price === 0 ? "бесплатно" : delivery.price
                      }`}
                    </label>
                  </div>
                ))}
              </div>

              {(selectedDelivery.name === "courier" ||
                selectedDelivery.name === "sdek") && (
                <div className="delivery-address">
                  <label htmlFor="address">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Адрес*"
                      required
                    />
                  </label>
                </div>
              )}

              {selectedDelivery.name === "no" && (
                <div className="delivery-address place">
                  <h4>Выберите точку:</h4>
                  {places.map((place) => (
                    <div key={place.id} className="card-radio">
                      <input
                        type="radio"
                        name="place"
                        id={`place-${place.id}`}
                        value={`place-${place.id}`}
                      />
                      <label
                        htmlFor={`place-${place.id}`}
                        className="card-content"
                      >
                        <span className="card-inner">
                          <img
                            src={place.images[0]}
                            alt={`place-${place.id}`}
                          />
                          <span>{`место ${place.id}`}</span>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </section>
            <section className="container-payment">
              <h2>Оплата</h2>
              <div className="payment-inputs">
                {paymentTypes.map((payment) => (
                  <div className="payment-radio-input" key={payment.id}>
                    <input
                      type="radio"
                      id={`payment-${payment.name}`}
                      name="payment"
                      value={payment.name}
                      checked={selectedPayment === payment.name}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <label htmlFor={`payment-${payment.name}`}>
                      {payment.type}
                    </label>
                  </div>
                ))}
              </div>
            </section>
            <section className="container-comment">
              <h2>Комментарий</h2>
              <input name="comment" id="comment" placeholder="Написать"></input>
            </section>
            <section className="container-order">
              <div className="container-order-name">
                <h3>{typeProduct}</h3>
                <h3>{product.name}</h3>
              </div>
              <div className="container-product-image">
                <img src={image} alt="image-product" />
              </div>
              <div className="container-order-quantity-price">
                <span className="element-quantity">{product.quantity}</span>{" "}
                <span>{`${product.price}р`}</span>
              </div>
            </section>
            {selectedDelivery.price !== undefined && (
              <section className="container-sum-order">
                <h2>Сумма заказа:</h2>
                <span className="order-sum">
                  {`${product.price + selectedDelivery.price} рублей`}
                </span>
              </section>
            )}
            <button>Подтвердить заказ</button>
          </form>
        </>
      ) : (
        <NeedToAuth></NeedToAuth>
      )}
    </div>
  );
}
