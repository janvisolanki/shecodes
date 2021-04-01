import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch(e => alert(e.message));
    }



    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://images.indianexpress.com/2021/01/myntra.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>


                <button onClick={register} className="login__registerButton">Create your Account</button>
            </div>

        </div>
    )
}

export default Login