import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selecetCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckOutPage = ({ CartItems, Total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                CartItems.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
                })
            }
            <div className='total'>TOTAL: ${Total}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                     <br />
                4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
            </div>
            <StripeCheckoutButton price={Total} />
        </div>
    );
};


const mapStateToProps = createStructuredSelector(
    {
        CartItems: selectCartItems,
        Total: selecetCartTotal
    }
);

export default connect(mapStateToProps)(CheckOutPage);