import React from 'react';
import StripeCheckout from 'react-stripe-checkout';




const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const PublishableKey = 'pk_test_87VpFMTj9hhKKcymdERvD4Zb007ILpkG5J';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
            label='Pay Now'
            currency="EURO"
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