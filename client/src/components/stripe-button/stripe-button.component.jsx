import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { json } from 'body-parser';
import { errors } from 'stripe';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const PublishableKey = 'pk_test_87VpFMTj9hhKKcymdERvD4Zb007ILpkG5J';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => { alert('payment successful'); })
            .catch(error => {
                console.log('payment error', JSON.parse(error));
                alert('there is an issue with your payment. Please be sure that you have used provided ');
            });
    };
    return (
        <StripeCheckout
            label='Pay Now'
            currency="EUR"
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is € ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={PublishableKey}
        />
    );
};
export default StripeCheckoutButton;