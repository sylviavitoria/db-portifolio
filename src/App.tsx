import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Curriculo from './pages/Curriculo';
import Projetos from './pages/Projetos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;