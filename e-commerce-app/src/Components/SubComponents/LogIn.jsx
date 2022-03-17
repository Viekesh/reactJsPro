import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

const LogIn = () => {

    const [email, setEmail] = useState()

    const [password, setPassword] = useState()

    const signIn = e => {
        e.preventDefault()
    }

    return (
        <div className='login'>
            <div className="bubble bubble_1"></div>
            <div className="bubble bubble_2"></div>
            <div className="bubble bubble_3"></div>
            <div className="login_container flex">
                <h1 className='signin_heading'>SignIn</h1>
                <form>
                    <h5 className='signin_subheading'>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='form_elements' />
                    <h5 className='signin_subheading'>Password</h5>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='form_elements' />
                    <br />
                    <button type='submit' onClick={signIn} className="login_signin button form_elements flex absolute_center">SignIn</button>
                </form>
                <p className='signin_description'>By continuing, you agree our conditions of use and privacy notice</p>
                <p className='signin_description'>You have no accout, then <Link to='/Register'>Register</Link> here</p>
            </div>
        </div>
    )
}

export default LogIn;