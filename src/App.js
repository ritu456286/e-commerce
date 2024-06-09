import './App.css';
import HomePage from './pages/homepage/homepage.component';

import { Route, Routes } from "react-router-dom";

import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/shop' element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;