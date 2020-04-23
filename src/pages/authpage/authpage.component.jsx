import React from 'react';
import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'
import './authpage.style.scss';

const AuthPage = () => (
    <div className="authpage">
        <Signin/>
        <Signup/>
    </div>
)

export default AuthPage;