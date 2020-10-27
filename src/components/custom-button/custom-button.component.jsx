import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({ children, isGooleSignIn, inverted, ...otherprops }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGooleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
        { children}
    </button >
);

export default CustomButton;