import React from 'react';
import './Form.css';

function Form() {
    return (

            <div className="row">
                <div className="container">
                    <h2>Login</h2>
                    <div className="container w-100 back-color-white">
                        <p>Login to Platio UK Online</p>
                        <p>Please enter your email address OR customer number, your password and login to your account.</p>
                        <form className="form-horizontal">
                            <div className="form-row justify-content-between">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="email">E-mail:</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <p>OR:</p>
                                    <div className="form-group">
                                        <label for="custName">Customer Number:</label>
                                        <input type="text" className="form-control" id="custName"/>
                                    </div>
                                    <p>Not registered?</p><a href="#">Sign up now</a>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="password">Password:</label>
                                        <input type="password" className="form-control" id="password"/>
                                    </div>
                                    <span>Forgotten your password?&nbsp;<a href="#">Click here</a></span>
                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


    )
}

export default Form;