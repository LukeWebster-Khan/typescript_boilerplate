import React from 'react';
import GoogleLogo from '../../google_icon.png';
import './Nav.css'
const Logo = () => {
    return (
        <div className="Nav__logo">
            <img src={GoogleLogo} alt="Google" />
        </div>
    );
};
export default Logo;