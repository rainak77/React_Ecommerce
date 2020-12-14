import React from 'react';
import './sign-up.styles.scss';

import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { signUpStart } from '../../redux/user/user.action';

class Signup extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }


    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password does not match:");
            return;
        }
        signUpStart({ displayName, email, password });
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await createUserProfileDocument(user, { displayName });
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });
        // }
        // catch (error) {
        //     console.log(error);
        // }
    };


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an Account</h2>
                <span className='title'>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                        name='displayName'
                        value={displayName}
                        handlechange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput type='email'
                        name='email'
                        value={email}
                        handlechange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput type='password'
                        name='password'
                        value={password}
                        handlechange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handlechange={this.handleChange}
                        label='ConfirmPassword'
                        required
                    />
                    <CustomButton type='submit'>SIGN- UP</CustomButton>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Signup);