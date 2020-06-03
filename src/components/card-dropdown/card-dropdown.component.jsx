import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import './card-dropdown.style.scss';

const CardDropdown = ({cartItems}) => (
    <div className="card-dropdown">
        <div className="card-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>checkout</CustomButton>
    </div>
)

const mapStateToProps = ({card : {cartItems}}) => (
    {cartItems}
)

export default connect(mapStateToProps)(CardDropdown);