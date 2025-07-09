import "./MiniMenuStyle.css";
import { useEffect, useState, useRef, useCallback } from "react";
import BottomButton from "../BottomButton/BottomButton";
import coffeeProducts from "../../data/coffeeProducts";
import bakeryProducts from "../../data/bakeryProducts";
import dessertProducts from "../../data/dessertProducts";
import { useSwipeable } from "react-swipeable";

export default function MiniMenu() {
  const visibleCount = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState(coffeeProducts);
  const [activeMenu, setActiveMenu] = useState("coffee");
  const [noTransition, setNoTransition] = useState(false);

  const trackRef = useRef(null);
  const isDragging = useRef(false);

  // Свайпы
  const swipeHandlers = useSwipeable({
    onSwiping: () => {
      isDragging.current = true;
    },
    onSwiped: () => {
      isDragging.current = false;
    },
    onSwipedLeft: () => {
      setCurrentIndex((prev) =>
        prev < products.length - visibleCount ? prev + 1 : prev
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Обновление позиции карусели
  const updateCarouselPosition = useCallback(() => {
    if (trackRef.current) {
      if (window.innerWidth > 768) {
        const cardWidth = trackRef.current.children[0]?.offsetWidth || 0;
        trackRef.current.style.transform = `translateX(-${
          currentIndex * (cardWidth + 30)
        }px)`;
      } else if (window.innerWidth <= 768) {
        const cardWidth = trackRef.current.children[0]?.offsetWidth || 0;
        trackRef.current.style.transform = `translateX(-${
          currentIndex * (cardWidth + 20)
        }px)`;
      }
    }
  }, [currentIndex]);

  // Применение позиции при изменении индекса
  useEffect(() => {
    updateCarouselPosition();
  }, [updateCarouselPosition]);

  // Обработка resize
  useEffect(() => {
    const handleResize = () => updateCarouselPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateCarouselPosition]);

  // Автопрокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        if (currentIndex < products.length - visibleCount) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Убираем анимацию, сбрасываем, возвращаем анимацию
          setNoTransition(true);
          setCurrentIndex(0);

          setTimeout(() => {
            setNoTransition(false);
          }, 50);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, products.length]);

  // Смена меню
  function changeCards(type) {
    const map = {
      coffee: coffeeProducts,
      bakery: bakeryProducts,
      dessert: dessertProducts,
    };
    setActiveMenu(type);
    setProducts(map[type] || coffeeProducts);
    setCurrentIndex(0);
  }

  // Кнопки прокрутки
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev < products.length - visibleCount ? prev + 1 : prev
    );
  }, [products.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Рендер карточек
  const cardElements = products.map((product) => (
    <div className="card" key={product.id}>
      <h4 className="card-name-product">{product.name}</h4>
      <hr />
      <div className="card-img-product">
        <img src={product.img} alt={product.name} />
      </div>
    </div>
  ));

  return (
    <div className="container-mini-menu">
      <h2 className="title">меню</h2>
      <div className="menu-btns">
        <button
          className={`menu-coffee-btn ${
            activeMenu === "coffee" ? "selected" : ""
          }`}
          onClick={() => changeCards("coffee")}
        >
          кофеек
        </button>
        <button
          className={`menu-bakery-btn ${
            activeMenu === "bakery" ? "selected" : ""
          }`}
          onClick={() => changeCards("bakery")}
        >
          булочки
        </button>
        <button
          className={`menu-dessert-btn ${
            activeMenu === "dessert" ? "selected" : ""
          }`}
          onClick={() => changeCards("dessert")}
        >
          сладенькое
        </button>
      </div>

      <div className="carousel-wrapper">
        <button className="scroll-button left" onClick={handlePrev}>
          ←
        </button>
        <div
          className={`menu-cards ${noTransition ? "no-transition" : ""}`}
          ref={(el) => {
            trackRef.current = el;
            swipeHandlers.ref(el);
          }}
        >
          {cardElements}
        </div>
        <button className="scroll-button right" onClick={handleNext}>
          →
        </button>
      </div>

      <BottomButton link="/menu" name="Смотреть все меню" />
    </div>
  );
}
