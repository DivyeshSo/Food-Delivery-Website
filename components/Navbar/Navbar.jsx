import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div class="container position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" id='navbar-sticky'>
        <a href="" class="navbar-brand p-0">
          <Link to='/'><h1 class="text m-0 logo"><i class="fa fa-utensils me-3"></i>E-Foodee</h1></Link>  
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 pe-4">
                <Link to="/" className="nav-item nav-link active navbar-menu">Home</Link>
                <a href="#about" class="nav-item nav-link navbar-menu">About</a>
                <a href="#service" class="nav-item nav-link navbar-menu">Service</a>
                <a href="#explore-menu" class="nav-item nav-link navbar-menu">Menu</a>
                <a href="#feedback" class="nav-item nav-link navbar-menu">Feedback</a>
                <a href="#footer" class="nav-item nav-link navbar-menu">Contact</a>
            </div>
            <img src={assets.search_icon} alt="" className='search' />
          <Link to='/cart'><img src={assets.basket_icon} className='cart' /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          <button class="btn btn-primary py-2 px-4">Book A Table</button>
          <button className='btn btn-primary py-2 px-4' onClick={()=>setShowLogin(true)}>Login</button>
        </div>
    </nav>
  </div>
  )
}

export default Navbar