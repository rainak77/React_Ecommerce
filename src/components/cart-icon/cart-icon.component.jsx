import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from "../../redux/cart/cart.selector";




const CartIcon = ({ toggle, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggle}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapStateToProp = (state) => ({
    itemCount: selectCartItemsCount(state)
});


const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProp, mapDispatchToProps)(CartIcon);