import React from "react";

const NavBar = () => {
    return (
        <div className="Nav__bar-container">
        <ul className="Nav__links">
            <li>About</li>
            <li>Why Me?</li>
            <li>Shop</li>
            <li>Advice Centre</li>
            {/* <Link to="/">Home</Link> */}
            {/* <Link to="/about">About</Link> */}
        </ul>
        </div>
    );
    };

export default NavBar;