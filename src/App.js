import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginThick } from "./components/ui/_test_/Navbar";
import Footer from "./components/ui/_test_/Footer";
import Card from "./components/ui/_test_/Card";
import About from "./pages/_test_/TreeList";
import Home from "./pages/_test_/Home";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
