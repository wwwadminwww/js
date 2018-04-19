import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import './LoginPage.css';

function LoginPage(){
    return (
        <div className="container-fluid back-color-blue">
            <Header />
            <Form />
            <Footer />
        </div>
    )
}

export default LoginPage;