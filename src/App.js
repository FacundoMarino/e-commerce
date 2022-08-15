import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import CategoryContainer from './components/CategoryCotainer/CategoryContainer';
import Navbar from './components/layout/Navbar/Navbar';
import ProductDetail from './components/ProducDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Navbar />

          <Routes>
            <Route path='/' element={<CardContainer />} />
            <Route path='/:id' element={<ProductDetail />} />
            <Route path='/category/:categoryId' element={<CategoryContainer />} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
