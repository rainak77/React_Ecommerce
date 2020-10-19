import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // { console.log('handlesubmit state value---' + this.state.email); }

        this.setState({ email: '', password: '' });
    };

    handleChange = (event) => {

        const { value, name } = event.target;
        this.setState({ [name]: value });

    };

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handlechange={this.handleChange}
                        label='email'
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        handlechange={this.handleChange}
                        required />

                    <div className='buttons' >
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGooleSignIn > Google (Sign In)</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

