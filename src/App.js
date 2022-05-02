import logo from './logo.svg';
import './App.css';
import { Layout, Typography, Space } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { 
  Navbar
} from './components';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import Cryptocurrencies from './pages/Cryptocurrencies';
import CryptoDetails from './pages/CryptoDetails';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
          <Layout>
            <div>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route exact path='/news' element={<News />} />
              </Routes>
            </div>
          </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
        </BrowserRouter>
  );
}

export default App;
