import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';



const CartDropdown = ({ cartItems, history, dispatch }) => {
    console.log(history);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length
                    ?
                    cartItems.map(Item => (<CartItem key={Item.id} item={Item} />))
                    :
                    <span className='empty-message'>Your Cart Is Empty</span>}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}>

                Go TO CHECKOUT
            </CustomButton>
        </div >
    );
};

const mapStateToProp = state => {
    console.log('i am dropdown');

    return ({
        cartItems: selectCartItems(state)
    });
};


export default withRouter(connect(mapStateToProp)(CartDropdown));