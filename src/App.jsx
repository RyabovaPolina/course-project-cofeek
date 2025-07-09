import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainGallery from "./components/MainGallery/MainGallery";
import MiniAboutUs from "./components/MiniAboutUs/MiniAboutUs";
import Discount from "./components/Discount/Discount";
import MiniMenu from "./components/MiniMenu/MiniMenu";
import Places from "./components/Places/Places";
import Feedback from "./components/Feedback/Feedback";
import AdShop from "./components/AdShop/AdShop";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import ScrollToTop from "./utils/ScrollToTop";
import AboutUs from "./components/AboutUs/AboutUs";
import Shop from "./components/Shop/Shop";
import OrderForm from "./components/OrderForm/OrderForm";
import FeedbackPage from "./components/FeedbackPage/FeedbackPage";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";
import { AuthProvider } from "./context/AuthContext";
import ContactPage from "./components/ContactPage/ContactPage";
import { HelmetProvider, Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Кофеёк — уютная кофейня и интернет-магазин кофе</title>
        <meta
          name="description"
          content="Добро пожаловать в Кофеёк! Узнайте больше о нас, посмотрите меню, почитайте отзывы и закажите кофе домой."
        />
      </Helmet>
      <div className="container-main-page">
        <MainGallery></MainGallery>
        <MiniAboutUs></MiniAboutUs>
        <Discount></Discount>
        <MiniMenu></MiniMenu>
        <Places></Places>
        <Feedback></Feedback>
        <AdShop></AdShop>
        <Contacts></Contacts>
      </div>
    </>
  );
}

function AppLayout() {
  const location = useLocation();
  const isAuthPage = ["/auth", "/register"].includes(location.pathname);

  return (
    <AuthProvider>
      <ScrollToTop />
      {!isAuthPage && <Header />}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/personal_account" element={<PersonalAccount />} />
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </AuthProvider>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppLayout />
      </Router>
    </HelmetProvider>
  );
}

export default App;
