import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search</label>
                <input id="search" type="text" placeholder="Search" />
            </form>
            <ul>
                <li>
                    <Link className="navLink1" to="/">
                        Home
                    </Link>
                    <Link className="navLink2" to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
