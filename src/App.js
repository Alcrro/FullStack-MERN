import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/_test_/Home";
import About from "./pages/_test_/About";
import LoginRoute from "./routes/Login";
import Footer from "./components/ui/_test_/Footer";
import ReactDocument from "./pages/_test_/ReactDocument";
import { Shop } from "./pages/_test_/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Navbar from "./components/ui/_test_/Navbar";
import NavbarMenu from "./components/ui/_test_/NavbarMenu";
import SideFilter from "./components/ui/_test_/sideFilter";
import LayoutProductPage from "./components/ui/_test_/layoutProductPage";
function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          {/* <Navbar />
          <NavbarMenu /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                  <SideFilter />
                  <Shop />
                </>
              }
            />

            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<LoginRoute />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/reactdocument" element={<ReactDocument />} />
            <Route exact path="/layoutproductpage" element={<LayoutProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
