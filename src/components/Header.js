import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <React.Fragment>
        <h1>Testing</h1>
        <NavLink to="/" exact={true} >Home</NavLink>
    </React.Fragment>
);

export default Header;