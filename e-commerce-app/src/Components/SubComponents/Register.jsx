import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Register.css';

const Register = () => {

    const [email, setEmail] = useState();

    const { password, setPassword } = useState();

    const register = (e) => {
        e.preventDefault();
    };

    return (
        <div className='register login'>
            <div className="bubble bubble_1"></div>
            <div className="bubble bubble_2"></div>
            <div className="bubble bubble_3"></div>
            <div className="register_container login_container flex">
                <h1 className='signin_heading'>Create Account</h1>
                <form>
                    <h5 className='signin_subheading'>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='form_elements' />
                    <h5 className='signin_subheading'>Password</h5>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='form_elements' />
                    <br />
                    <button type='submit' onClick={register} className="login_signin button form_elements flex absolute_center" >Continue</button>
                    <p className='signin_description' >Already have an account?</p>
                    <p className='signin_description' >Click here <Link to='/LogIn'>SignIn</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register;