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
import ScrollToTop from "./pages/ScrollToTop";




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
          <Route path="/" element={<><ScrollToTop /><Home /></>} />
          <Route path="/products" element={<><ScrollToTop /><Products /></>} />
          <Route path="/Feedbacks" element={<><ScrollToTop /><Feedbacks /></>} />
          <Route path="/privacy-policy" element={<><ScrollToTop /><PrivacyPolicy /></>} />
          <Route path="/single-product" element={<><ScrollToTop /><SingleProduct /></>} />
          <Route path="/Cart" element={<><ScrollToTop /><Cart /></>} />
          <Route path="/checkout" element={<><ScrollToTop /><CheckoutPage /></>} />
          <Route path="/contactus" element={<><ScrollToTop /><ContactUs /></>} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
