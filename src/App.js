import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/_test_/Home";
import About from "./pages/_test_/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
