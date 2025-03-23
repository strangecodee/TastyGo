import React from 'react';
import Menubar from './components/Menubar/Menubar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import ExploreFood from './pages/ExploreFood.jsx';
import './index.css';
import FoodDetails from './pages/FoodDetails.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Login/Register.jsx';
import { ToastContainer } from 'react-toastify';
import { useContext } from "react";
import MyOrders from './pages/MyOrders.jsx';
import { StoreContext } from './context/StoreContext.jsx';
import ExploreAbout from './pages/ExploreAbout.jsx';





const App = () => {
  const {token} = useContext(StoreContext);
  return (
    
    <div>
      <Menubar />
      <ToastContainer/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/explore" element={<ExploreAbout />} />
        <Route path="/ExploreFood" element={<ExploreFood />} /> 
        <Route path='/food/:id' element={<FoodDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={token ? <PlaceOrder/>: <Login/>}/>
        <Route path='/login' element={token ? <Home />:<Login/>}/>
        <Route path='/register' element={token ? <Home />:<Register/>}/>
        <Route path='/myorders' element={token ? <MyOrders/>: <Login/>}/>
      </Routes>
     </div>
      
  )
}

export default App;