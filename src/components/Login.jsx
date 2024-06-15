import React from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';
import total_image from '../assets/totalmsg.png';
const Login=()=>{
    let navigate1 = useNavigate();
    function handleClick() {
    navigate1("/home");
    }
    let navigate2=useNavigate();
    function handleRegisterclick(){
        navigate2("/register");
    }
    return(
        <div className='login-body'>
            
        <div className='login-div'>
            <div className='login-left-div'><p className='login_welcome'>WELCOME<br/>
Dont Have an Account?<br/>
</p>
<img src={total_image} alt="login_image" className='total-image'/>
<button className='register_button' onClick={handleRegisterclick}>Register Now</button>
</div>
<div className='login-right-div'>
                <p className='faculty_login'>FACULTY LOGIN</p>
                <form className="login_form">
<div className="input-elements">
<label for="email" className="login_email">Email</label>
<input type="email" placeholder="youremail@gmail.com" id="email_login" name="email"/><br/><br/>
<label for="password" className="login_password">Password</label>
<input type="password" placeholder="******" id="password_login" name="password"/><br/><br/>

</div>
<button className="login_button" onClick={handleClick}>Login</button>
<div className="remember-forgot">
                            <label htmlFor="rememberMe" id="rememberMe_login">
                                <input type="checkbox"  name="rememberMe" /> Remember Me
                            </label>
                            <a href="#" className="forgot-password-link-login">Forgot Password</a>
                        </div>
</form>
            </div>
        </div>
        </div>

   )
}
export default Login;