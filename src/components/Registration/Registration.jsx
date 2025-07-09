import { useState } from "react";
import BigTitle from "../BigTitle/BigTitle";
import "./RegistrationStyle.css";
import Popup from "../Popup/Popup";

export default function Registration() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  function onSubmit(formData) {
    const newErrors = {};

    const name = formData.get("name");
    const surname = formData.get("surname");
    const town = formData.get("town");
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");

    if (!/^[A-Za-zА-Яа-я\-]+$/.test(town)) newErrors.town = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;
    if (!/^\+7\d{10}$/.test(phone)) newErrors.phone = true;
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password))
      newErrors.password = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Сброс ошибок

    const user = {
      id: Date.now(),
      name,
      surname,
      town,
      email,
      password,
      phone,
    };

    fetch("https://682a216aab2b5004cb35ef06.mockapi.io/api/coffee-shop/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при отправке формы");
        }
        return response.json();
      })
      .then((result) => {
        setIsSuccess(true);
      })
      .catch((error) => console.error(error.message));
  }
  return (
    <div className="container-registration">
      <BigTitle type="register"></BigTitle>
      <form action={onSubmit} method="POST" className="container-form-registration">
        <div className="name-surname">
          <div className="input-text">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Александра"
              required
            />
          </div>
          <div className="input-text">
            <label htmlFor="surname">Фамилия</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Александрова"
              required
            />
          </div>
        </div>
        <div className="input-text">
          {" "}
          <label htmlFor="town">Город</label>
          <input
            type="text"
            name="town"
            id="town"
            placeholder="Санкт-Петербург"
            required
            pattern="^[A-Za-zА-Яа-я\-]+$"
            title="Город должен содержать только буквы и дефисы"
            className={errors.town ? "input-error" : ""}
          />
        </div>
        <div className="input-text">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="cofeek@gmail.com"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Введите корректный email (например, user@example.com)"
            className={errors.email ? "input-error" : ""}
          />
        </div>
        <div className="input-text">
          <label htmlFor="phone">Номер телефона</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+7(777)-777-77 77"
            required
            pattern="^\+7\d{10}$"
            title="Формат: +7XXXXXXXXXX (только цифры после +7)"
            className={errors.phone ? "input-error" : ""}
          />
        </div>
        <div className="input-text">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="goOdpAsSword2!!1"
            required
            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
            title="Пароль должен содержать минимум 8 символов, одну заглавную букву, цифру и спецсимвол"
            className={errors.password ? "input-error" : ""}
          />
          <span className="password-required">
            пароль должен содержать минимум 8 символов, одну заглавную букву,
            цифру и спецсимвол
          </span>
        </div>
        <button className="btn-register" type="submit">
          Зарегистрироваться
        </button>
      </form>
      {isSuccess && (
        <Popup
          path="auth"
          title="Регистрация прошла успешно"
          btnText="Войти в аккаунт"
        ></Popup>
      )}
    </div>
  );
}
