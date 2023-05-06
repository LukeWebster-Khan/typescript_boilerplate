import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavOptions from "./NavOptions";
const Nav = () => {
    return (
        <div className="Nav__container">
        <Logo />
        <NavBar />
        <NavOptions />
        </div>
    );
};
export default Nav;