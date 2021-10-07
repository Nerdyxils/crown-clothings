import React, { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';

import './signin-and-signup.scss'

function SignInAndSignUpPage() {
    return ( 
        <div className="signin-and-signup">
            <SignIn />
        </div>
     );
}

export default SignInAndSignUpPage;