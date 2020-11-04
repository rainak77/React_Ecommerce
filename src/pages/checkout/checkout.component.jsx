import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selecetCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

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
            <div className='total'>
                <span>TOTAL: ${Total}</span>
            </div>
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