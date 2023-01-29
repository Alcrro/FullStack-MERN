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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterForm from "./components/form/RegisterForm";
import SignInFirebase from "./components/ui/_test_/SignInFirebase";
import ListPlanets from "./ReactDoc/ReactHooks/Exercitii/ListPlanets";
import LiveText from "./ReactDoc/ReactHooks/Exercitii/liveText";
import ToggleButtonEx from "./ReactDoc/ReactHooks/Exercitii/ToggleButtonEx";
import IndexToDoList from "./ReactDoc/ReactHooks/Exercitii/ToDoList/IndexToDoList";
import TestTodoList from "./ReactDoc/ReactHooks/Exercitii/ToDoList/testTodoList";
import Lifecycle from "./ReactDoc/Lifecycle";
import { ProductContext } from "./context/_test_/context-product";

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <NavbarMenu />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Home />
                    <SideFilter />
                    <Shop />
                    <ListPlanets />
                    <LiveText />
                    <ToggleButtonEx />
                  </>
                }
              />

              <Route exact path="/about" element={<About />} />
              <Route exact path="/register" element={<RegisterForm />} />
              <Route exact path="/login" element={<LoginRoute />} />
              <Route exact path="/signin" element={<SignInFirebase />} />
              <Route path="/cart" element={<Cart />} />
              <Route exact path="/reactdocument" element={<ReactDocument />} />
              <Route exact path="/layoutproductpage" element={<LayoutProductPage />} />
              <Route
                exact
                path="/todolist"
                element={
                  <>
                    <TestTodoList />
                    <Lifecycle />
                  </>
                }
              />
            </Routes>
          </Router>
        </ShopContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
