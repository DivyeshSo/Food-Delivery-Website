import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Lohinpopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<><input type="text" placeholder='Your Name' required /></>}
                <input type="text" placeholder='Your email' required />
                <input type="text" placeholder='Password' readOnly/>
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a New Account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have in account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default Lohinpopup