import { StrictMode } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Cart from './components/Cart/Cart';
import CategoryContainer from './components/CategoryCotainer/CategoryContainer';
import Form from './components/Form/Form';
import Navbar from './components/layout/Navbar/Navbar';
import ProductDetail from './components/ProducDetail/ProductDetail';
import DataProvider from './context/DataProvider/DataProvider';

function App() {
  return (
    <div className="App">
      <StrictMode>
        <BrowserRouter>
          <DataProvider>
          <Navbar />

            <Routes>
              <Route path='/' element={<CardContainer />} />
              <Route path='/:id' element={<ProductDetail />} />
              <Route path='/category/:categoryId' element={<CategoryContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/form' element={<Form />} />
            </Routes>
          </DataProvider>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

export default App;
