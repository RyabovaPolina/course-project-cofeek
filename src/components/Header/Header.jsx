import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const { user } = useAuth();

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // отслеживание клика вне меню
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen && // меню открыто
        menuRef.current && // ссылка на DOM-узел меню существует
        !menuRef.current.contains(event.target) && // клик не по меню
        burgerRef.current && // ссылка на DOM-узел бургера существует
        !burgerRef.current.contains(event.target) // клик не по бургеру
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside); //очистка слушателя
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container">
        <div className="logotype">
          <Link to="/">
            <img src="src/assets/logo.svg" alt="logo" />
          </Link>
        </div>

        <div className="menu-wrapper" ref={menuRef}>
          <div
            className={`burger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            ref={burgerRef}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
              о нас
            </Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
              магазин
            </Link>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
              меню
            </Link>
            <Link to="/feedback" onClick={() => setIsMenuOpen(false)}>
              отзывы
            </Link>
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
              контакты
            </Link>
            {!user === true ? (
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                {"→ войти"}
              </Link>
            ) : (
              <Link to="/personal_account" onClick={() => setIsMenuOpen(false)}>
                {"аккаунт"}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
