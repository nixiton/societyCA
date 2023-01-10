import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom';

import HomeComponent from './components/home/HomeComponent';
import DetailComponent from './components/home/DetailComponent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/detail/:id" element={<DetailComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
