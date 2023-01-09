import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/_test_/Home";
import About from "./pages/_test_/About";
import LoginRoute from "./routes/Login";
import Footer from "./components/ui/_test_/Footer";
import RefTutorial from "./ReactDoc/RefTutorial";
import LayoutEffectTutorial from "./ReactDoc/LayoutEffectTutorial";
import ReducerTutorial from "./ReactDoc/ReducerTutorial";
import EffectTutorial from "./ReactDoc/EffectTutorial";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<LoginRoute />} />
          <Route exact path="/reftutorial" element={<RefTutorial />} />
          <Route exact path="/layouteffecttutorial" element={<LayoutEffectTutorial />} />
          <Route exact path="/reducertutorial" element={<ReducerTutorial />} />
          <Route exact path="/effecttutorial" element={<EffectTutorial />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
