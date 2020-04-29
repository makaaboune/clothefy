import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/clothefy.svg'
import CardIcon from '../card-icon/card-icon.component';
import CardDropdown from '../card-dropdown/card-dropdown.component'
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({currentUser, visible}) => {
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
                <CardIcon/>
            </div>
            {visible ? <CardDropdown/> : null}
        </div>
    )
}

const mapStateToProps = state => ({
        currentUser: state.user.currentUser,
        visible: state.card.visible
})

export default connect(mapStateToProps)(Header)