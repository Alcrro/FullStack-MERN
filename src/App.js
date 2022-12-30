import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/_test_/Home';
import { LoginThick } from './components/ui/_test_/Navbar';
import Footer from './components/ui/_test_/Footer';

function App() {
  return (
    <Router>
      <>
        <Home />
      </>
    </Router>
  );
}

export default App;
