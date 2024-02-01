import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from "./pages/Products";
import Feedbacks from "./pages/Feedbacks";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";




const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Feedbacks" element={<Feedbacks />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
