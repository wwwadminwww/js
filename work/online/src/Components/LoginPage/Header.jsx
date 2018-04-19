import React from 'react';
import './Header.css';

function Header(){
    let logo = 'https://www.platio.uk/images/logo.png';
    let url = 'http://platio.uk';
    return (
        <header className="row">
            <div className="container">
                <div className="row back-color">

                    <a href="#">
                        <img src={logo} className="img-fluid" />
                    </a>

                    <div className="col-md-9 text-center">
                        <h2>Platio website</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;