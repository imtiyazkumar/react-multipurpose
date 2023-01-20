import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1> Hello React App</h1>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
