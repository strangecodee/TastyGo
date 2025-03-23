
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Menubar from './components/Menubar';
import ListFood from './pages/ListFood/ListFood';
import AddFood from './pages/AddFood/AddFood';
import Orders from './pages/Orders/Orders';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

const toggleSidebar = () => {
  setSidebarVisible(!sidebarVisible);
}

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sidebarVisible={sidebarVisible} />
      <div id="page-content-wrapper">
        <Menubar toggleSidebar={toggleSidebar} />
        <ToastContainer />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<ListFood />} />
            <Route path="/list" element={<ListFood />} />
            <Route path="/add" element={<AddFood />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
