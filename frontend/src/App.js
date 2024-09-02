import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Home from "./scenes/Home";
import Menu from "./scenes/Menu";
import Search from "./scenes/Search";
import Categories from "./scenes/Categories";
import Category from "./scenes/Category";
import Food from "./scenes/Food";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from './CartContext';
import LoginForm from './user/LoginForm';
import SignUpForm from './user/SignUpForm';
import ContactUsForm from "./user/ContactUs";
import NotFound from "./NotFound";
import ProtectedRoute from './ProtectedRoute'; 

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Food />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/checkout" element={<ProtectedRoute element={Checkout} />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/contact" element={<ProtectedRoute element={ContactUsForm} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
