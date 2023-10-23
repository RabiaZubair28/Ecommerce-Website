import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


const App = () => {
  return <div>
    
    <Router>
    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </Router>
  </div>;
};

export default App;
