import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; 
import AddProduct from './components/AddProduct/AddProduct';
import Manage from './components/Manage/Manage';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App"> 
      <Header />
       <Routes>
         <Route path='/' element={<Home />} /> 
         <Route path='/add-product' element={<AddProduct />} /> 
         <Route path='/manage-product' element={<Manage />} /> 
         <Route path='/product/:productId' element={<ProductDetails />}> </Route>
         <Route path='/update/:Id' element={<UpdateProduct />}> </Route>
       </Routes> 
    </div>
  );
}

export default App;
