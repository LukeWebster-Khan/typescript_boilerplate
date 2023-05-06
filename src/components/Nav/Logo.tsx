import React from 'react';
import GoogleLogo from '../../google_icon.png';
import './Nav.css'
const Logo = () => {
    return (
        <div className="Nav__logo Nav__section">
            <img src={GoogleLogo} alt="Google" />
            <p  className='Nav__strapline'>Made with ❤️ by pet parents</p>
        </div>
    );
};
export default Logo;