import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import login_image from '../assets/login_image.png';
import { withRouter } from 'react-router-dom';
const Register=({ history }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic here
        // After successful registration, navigate to home page
        history.push('/home');
    };
    let navigatereg = useNavigate();
    function handleregister() {
    navigatereg("/home");
    }
    return(
        <>
        <div className='main-body'>
            
        <div className='main-div'>
            <div className='left-div'><p className='register_welcome'>Smart Scanner<br/>
allows you to <br/>
scan smartly</p><img src={login_image} alt="login_image" className='login-image'/></div>
            <div className='right-div'>
                <p className='create_account'>Create Account</p>
                <div className="registration-form-container">
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName" className='name_registration_label'>Full Name</label>
                    <input
                        type="text"
                        className="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email"  className='email_registration_label'>Email</label>
                    <input
                        type="email"
                        className="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"  className='password_registration_label'>Password</label>
                    <input
                        type="password"
                        className="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword"  className='okpassword_registration_label'>Confirm Password</label>
                    <input
                        type="password"
                        className="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="Registration_button" onClick={handleregister}>Register</button>
                <p>Already Have an Account?<a href="/login" className='Login_link'>Login</a></p>
            </form>
        </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Register;