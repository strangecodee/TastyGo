import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';

const Sidebar = ({ sidebarVisible, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        setIsLoggedIn(false);
        toast.success("Logged out successfully!", {
            position: "top-center",
            autoClose: 2000,
        });
        navigate("/");
    };

    return (
        <div className={`border-end bg-white ${sidebarVisible ? '' : 'd-none'}`} id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">
                <img src={assets.logo} alt="logo" height={35} width={35} />
            </div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/dashboard">
                    <i className='bi bi-bar-chart-line me-2'></i> Dashboard
                </Link>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">
                    <i className='bi bi-plus-circle me-2'></i> Add Food
                </Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list">
                    <i className='bi bi-list-ul me-2'></i> List Food
                </Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders">
                    <i className='bi bi-cart me-2'></i> Orders
                </Link>
                <button
                    className="list-group-item list-group-item-action list-group-item-light p-3 text-start"
                    onClick={handleLogout}
                >
                    <i className='bi bi-box-arrow-right me-2'></i> Logout
                </button>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;
