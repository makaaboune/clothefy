import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/clothefy.svg'
import './header.style.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    shop
                </Link>
                <Link className="option" to="/contact">
                    contact
                </Link>
                <Link className="option" to="/signup">
                    signup
                </Link>
            </div>
        </div>
    )
}

export default Header