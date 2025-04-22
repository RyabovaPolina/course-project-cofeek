import "./HeaderStyle.css";

export default function Header() {
  return (
    <header>
      <div className="logotype">
        <img src="src/assets/logo.svg" alt="logo" />
      </div>
      <nav className="menu">
        <a>о нас</a>
        <a>магазин</a>
        <a>меню</a>
        <a>отзывы</a>
        <a>контакты</a>
      </nav>
    </header>
  );
}
