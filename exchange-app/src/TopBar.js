import React from 'react';
import logo from './assets/exchange-logo.png';
const TopBar = () => {
    return (
        <div>
            <nav style={{backgroundColor: '#fc3'}} className="navbar navbar-light navbar-expand">
                   <div className="d-flex">
                   <img src={logo} width="60" alt="hoaxify logo"/>  
                   <h2 className="pl-4">Exchange</h2>
                   </div>
            </nav>
        </div>
    );
};

export default TopBar;