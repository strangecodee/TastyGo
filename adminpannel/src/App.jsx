import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Menubar from './components/Menubar';
import ListFood from './pages/ListFood/ListFood';
import AddFood from './pages/AddFood/AddFood';
import Orders from './pages/Orders/Orders';
import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute.jsx";
import { isAdminLoggedIn } from "./utils/auth.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import OrdersGraph from "./pages/Orders/OrdersGraph.jsx";

const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(isAdminLoggedIn());
    const location = useLocation();

    useEffect(() => {
        // Recheck login state on route change
        setIsLoggedIn(isAdminLoggedIn());
    }, [location]);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="d-flex" id="wrapper">
            {isLoggedIn && <Sidebar sidebarVisible={sidebarVisible} setIsLoggedIn={setIsLoggedIn} />}
            <div id="page-content-wrapper">
                {isLoggedIn && <Menubar toggleSidebar={toggleSidebar} />}
                <ToastContainer />
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />
                        <Route path="/list" element={
                            <PrivateRoute>
                                <ListFood />
                            </PrivateRoute>
                        } />
                        <Route path="/add" element={
                            <PrivateRoute>
                                <AddFood />
                            </PrivateRoute>
                        } />
                        <Route path="/orders" element={
                            <PrivateRoute>
                                <Orders />
                            </PrivateRoute>
                        } />
                        <Route path="/dashboard" element={
                            <PrivateRoute>
                                <OrdersGraph />
                            </PrivateRoute>
                        } />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
