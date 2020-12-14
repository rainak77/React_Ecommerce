import React, { useState } from 'react';
import './sign-in.styles.scss';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredential, setCredential] = useState({ email: '', password: '' });
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: '',
    //         password: ''
    //     };
    // }

    const { email, password } = userCredential;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const { email, password } = this.state;
        emailSignInStart(email, password);

        // const { emailSignInStart } = this.props;

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' });

        // }
        // catch (error) {
        //     console.log(error);
        // }
    };

    const handleChange = (event) => {

        const { value, name } = event.target;
        setCredential({ ...userCredential, [name]: value });

    };

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput name='email' type='email'
                    value={email}
                    handlechange={handleChange}
                    label='email'
                    required />

                <FormInput
                    name='password'
                    type='password'
                    label='password'
                    value={password}
                    handlechange={handleChange}
                    required />

                <div className='buttons' >
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn > Google (Sign In)</CustomButton>
                </div>

            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);