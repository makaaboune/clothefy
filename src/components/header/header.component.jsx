import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/clothefy.svg'
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({currentUser}) => {
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
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>sign out</div>
                    :
                    <Link className="option" to="/signin">
                        signin
                    </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
        currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)