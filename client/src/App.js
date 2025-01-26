import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DiseasePrediction from '../src/pages/DiseasePrediction';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<DiseasePrediction />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
