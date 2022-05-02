import logo from './logo.svg';
import './App.css';
import { Layout, Typography, Space } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { 
  Navbar
} from './components';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
          <Routes>
            
          </Routes>
      </div>
      <div className='footer'>

      </div>
    </div>
        </BrowserRouter>
  );
}

export default App;
