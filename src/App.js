import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Navbar from './components/layout/Navbar/Navbar';
import DataProvider from './context/DataProvider/DataProvider';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <DataProvider>
        <Navbar />

          <Routes>
            <Route path='/' element={<CardContainer />} />
            <Route path='/product/:productId' element={<CardContainer />} />
            <Route path='/category/:categoryId' element={<CardContainer />} />
          </Routes>

        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
