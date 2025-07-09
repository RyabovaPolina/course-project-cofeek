import "./NeedToAuthStyle.css";
import { Link } from "react-router-dom";

export default function NeedToAuth() {
  return (
    <div className="need-to-auth">
      <h2>
        Вы не авторизированы в системе. Для оформления заказов необходимо
        <Link to="/auth" className="btn-registration order-form auth">
          войти в аккаунт
        </Link>
      </h2>
      <p>
        Нет аккаунта?
        <Link to="/register" className="btn-registration order-form">
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
}
