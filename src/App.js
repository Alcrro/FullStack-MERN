import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/_test_/Home";
import About from "./pages/_test_/About";
import LoginRoute from "./routes/Login";
import Footer from "./components/ui/_test_/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<LoginRoute />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
