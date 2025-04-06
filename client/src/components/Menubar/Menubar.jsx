import React from 'react';
import './Menubar.css';
import { assets } from '../../assets/assets';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useContext, token } from 'react';
const Menubar = () => {
  const [active,setActive] = useState("home");
  const navigate = useNavigate();
  const{quantities,token, setToken, setQuantities} = useContext(StoreContext);
  const uniqueItemsInCart = Object.values(quantities).filter(qty=> qty>0).length;
  const logout =()=>{
    localStorage.removeItem('token');
    setToken('')
    setQuantities({});
    navigate('/');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link to="/"><img src={assets.logo} alt="logo" className='mx-4' height={48}  width={48} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={active=== 'home' ? "nav-link fw-bold active": "nav-link"}  to="/" onClick={(()=>setActive('home'))}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={active=== 'explore' ? "nav-link fw-bold active": "nav-link"} to="/ExploreFood" onClick={()=> setActive('explore')}>Explore</Link>
        </li>
        <li className="nav-item">
          <Link className={active=== 'contact-us' ? "nav-link fw-bold active": "nav-link"} to="/ContactUs" onClick={()=> setActive('contact-us')}>Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className={active === 'testimonials' ? "nav-link fw-bold active" : "nav-link"} to="/testimonials" onClick={() => setActive('testimonials')}>Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link className={active=== 'locate' ? "nav-link fw-bold active": "nav-link"} to="/locate" onClick={()=> setActive('locate')}>Locate Us</Link>
        </li>
        <li className="nav-item">
          <Link className={active === 'faq' ? "nav-link fw-bold active" : "nav-link"} to="/faq" onClick={() => setActive('faq')}>FAQ</Link>
        </li>
      </ul>
      <div className="d-flex align-items-center gap-4">
       <Link to={`/cart`}> <div className="position-relative">
            <img src={assets.cart} alt="cart"height={28} width={28} className='position-relative'  />
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>{uniqueItemsInCart}</span>  
        </div></Link>
        { 
  !token ?
  <>
    <button className="btn btn-outline-primary btn-sm" onClick={() => navigate('/login')}>Login</button>
    <button className="btn btn-outline-success  btn-sm ms-1" onClick={() => navigate('/register')}>Register</button>
  </>
  :
  <div className="dropdown text-end">
    <img 
      src={assets.profile} 
      alt='User' 
      width={32} 
      height={32} 
      className='rounded-circle dropdown-toggle' 
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{ cursor: "pointer" }}
    />
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
      <li><button className="dropdown-item" onClick={() => navigate('/myorders')}>Orders</button></li>
      <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
    </ul>
  </div>
}

      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Menubar;
