import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Download from './pages/Download';
import Lifestyle from './pages/Lifestyle';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="holder ">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="download" element={<Download />} />
          <Route path="lifestyle" element={<Lifestyle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
