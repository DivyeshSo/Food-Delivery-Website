import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <h1 class="text m-0 logo"><i class="fa fa-utensils me-3"></i>E-Foodee</h1>
                <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quae, labore enim dolore reiciendis natus impedit officia dicta illum libero tenetur dolorem. Quisquam culpa aut eius iure iusto quaerat? Suscipit.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>conact@tomato.com.in</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 0 Tomato.com.in - All Rigth Reserved.</p>
    </div>
  )
}

export default Footer