import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { ContextConsumer } from '../../AppContext'
import { auth } from "../../firebase";

const Login = () => {

    const { setUser } = ContextConsumer()
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                history.push('/')
                setUser(userCredential.user)
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
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Mankindofficial FAKE AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <p>
                    Don't have an account? <a href="/signup">Register</a>
                </p>

            </div>
        </div>
    )
}

export default Login
