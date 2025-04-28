import logo from './logo.svg';
import './App.css';
import Portfolio from './views/Portfolio';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <div>

        <Routes>
          <Route path="/" element={<Portfolio />} />
          </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
