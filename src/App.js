import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/_test_/Home';
import { LoginThick } from './components/ui/_test_/Navbar';

function App() {
  return (
    <Router>
      <>
        <Home />
        <LoginThick />
      </>
    </Router>
  );
}

export default App;
