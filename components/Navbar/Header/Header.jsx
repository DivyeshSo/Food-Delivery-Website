import React from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div class="container-a mt-0 py-5 bg-dark hero-header mb-5">
        <div class="container my-5 py-5">
            <div class="row align-items-center g-5 mr-4">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-3 text-white animated slideInLeft heading">Enjoy Our Delicious Meal</h1>
                    <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <button class="py-sm-3 px-sm-5 me-3 animated slideInLeft button-hero">Book A Table</button>
                </div>
            <div class="col-lg-5 text-center text-lg-end overflow-hidden hero-con">
                <img src={assets.pizza} alt="" className='hero-img' />
            </div>
        </div>
    </div>
</div>
  )
}

export default Header