import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/_test_/Home";
import About from "./pages/_test_/About";
import LoginRoute from "./routes/Login";
import Footer from "./components/ui/_test_/Footer";
import ReactDocument from "./pages/_test_/ReactDocument";
import Shop from "./pages/_test_/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<LoginRoute />} />
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/reactdocument" element={<ReactDocument />} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </>
  );
}

export default App;
