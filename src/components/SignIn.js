import React from 'react';
import { login } from '../utils';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <div>
            <h1>Sign in</h1>

            <button onClick={() => handleLogin()}>Click here to log in</button>
        </div>
    );
};

export default SignIn;