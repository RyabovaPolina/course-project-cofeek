import { Link } from "react-router-dom";
import BigTitle from "../BigTitle/BigTitle";
import "./AuthorizationStyle.css";
import { useState } from "react";
import Popup from "../Popup/Popup";
import { useAuth } from "../../context/AuthContext";

export default function Authorization() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const { setUser } = useAuth();

  function onSubmit(formData) {
    const userEmail = formData.get("email");
    const userPassword = formData.get("password");

    fetch("https://682a216aab2b5004cb35ef06.mockapi.io/api/coffee-shop/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ошибка авторизации");
        }
        return response.json();
      })
      .then((users) => {
        const user = users.find(
          (user) => user.email === userEmail && user.password === userPassword
        );

        if (user) {
          setUser(user);
          setIsSuccess(true);
          setError(""); // сбрасываем ошибку при успехе
          console.log("выполнен вход успешно", user.id);
        } else {
          setError("Неверный логин или пароль");
          console.log("неверный логин или пароль");
        }
      })
      .catch((error) => {
        console.error(error.message);
        setError("Ошибка сервера. Попробуйте позже.");
      });
  }
  return (
    <div className="container-authorization">
      <BigTitle type="auth" className="auth"></BigTitle>
      <form action={onSubmit} className="container-form-authorization">
        <div className="input-text">
          <label htmlFor="email">Логин/Почта</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="cofeek@gmail.com"
          />
        </div>
        <div className="input-text">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="goOdpasSword2!!34"
          />
        </div>
        {error && <p className="auth-error">{error}</p>}
        <button type="submit">Войти</button>
      </form>
      <span>
        Нет аккаунта?{" "}
        <Link to="/register" className="btn-registration">
          Зарегистрироваться
        </Link>
      </span>
      {isSuccess && (
        <Popup
          path="personal_account"
          title="Авторизация прошла успешно"
          btnText="Перейти в личный кабинет"
        ></Popup>
      )}
    </div>
  );
}
