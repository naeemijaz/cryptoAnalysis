import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Topgainerlooser from './pages/gainerlooser/Topgainerlooser';
import Home from './pages/home/Home';
import Inflowdata from './pages/inflowData/Inflowdata';
import News from './pages/news/News';
import Tradingview from './pages/tradingview/Tradingview';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" patname={'/'} element={<Home />} />
        <Route path="/tradingview" element={<Tradingview />} />
        <Route path="/inflow-data"  element={<Inflowdata />} />
        <Route path="/top-gainers-losers"  element={<Topgainerlooser />} />
        <Route path="/news"  element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
