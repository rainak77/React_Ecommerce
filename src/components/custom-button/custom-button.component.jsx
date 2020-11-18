import React from 'react';
import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherprops }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
        { children}
    </button >
);


export default CustomButton;