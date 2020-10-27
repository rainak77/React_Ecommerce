import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';



const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-itrm'>
            {
                cartItems.map(Item =>
                    (<CartItem key={Item.id} item={Item} />))
            }
        </div>
        <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProp = ({ cart: { cartItems } }) => {
    return ({ cartItems });
};
export default connect(mapStateToProp)(CartDropdown);