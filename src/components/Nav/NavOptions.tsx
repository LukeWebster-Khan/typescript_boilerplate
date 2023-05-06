import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faBell } from '@fortawesome/free-regular-svg-icons'
// export const mySolidIcon = () =>  (<FontAwesomeIcon icon={solidIcon} />); // works

const NavOptions = () => {
    return (
        <div className="Nav__options">
            <ul className="nav-options__list">
            <FontAwesomeIcon  icon={faCommentDots}/>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCartShopping} />
            </ul>
        </div>
    );
};

export default NavOptions;