import React from 'react';
import './Footer.css';

function Footer(){
    let logo = 'https://www.platio.uk/images/logo.png';
    return(
        <footer className="page-footer fixed-bottom">
            <div className="container-fluid back-color-black">
                <div className="col-md-4">
                    <img src={logo} />
                </div>
                <div className="col-md-8">
                    <h2>Footer Area</h2>
                </div>
            </div>
            <div className="footer-copyright text-center">
                Platio is a registered trademark of Platio UK Ltd. Copyright (c) 2018. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;