import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faBell } from '@fortawesome/free-regular-svg-icons'
import SignUpButton from './SignUpButton';
const NavOptions = () => {
    return (
        <div className="Nav__options Nav__section">
            <ul className="Nav__options-list">
            <FontAwesomeIcon  icon={faCommentDots}/>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCartShopping} />
        <SignUpButton />
            </ul>
        </div>
    );
};

export default NavOptions;