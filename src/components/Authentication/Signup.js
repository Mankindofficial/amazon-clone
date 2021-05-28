import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { ContextConsumer } from '../../AppContext'
import { auth } from "../../firebase";

const Signup = () => {

    const { setUser } = ContextConsumer()
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                // it successfully created a new user with email and password
                if (userCredential) {
                    history.push('/')
                    setUser(userCredential.user)
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='/images/amazon-logo-dark.png'
                    alt="Amazon-logo" 
                />
            </Link>

            <div className='login__container'>
                <h1>Create Account</h1>

                <form>
                    <h5>Your name</h5>
                    <input type='text' />
                    
                    <h5>E-mail</h5>
                    <input type='email' onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 6 characters" />
                    <p className="small">Passwords must be at least 6 characters</p>

                    <h5>Re-enter password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={register} className='login__signInButton'>Create your FAKE Amazon account</button>
                </form>

                <p>
                    By creating an account you agree to the Mankindofficial FAKE AMAZON APP <a href="/signup">Conditions of Use & Sale.</a> 
                </p>
                <p>
                    Please see our <a href="/signup">Privacy Notice</a>, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <p>
                    Already have an account? <a href="/login">Sign In</a>
                </p>

            </div>
        </div>
    )
}

export default Signup
