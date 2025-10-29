import React from "react";
import { Link } from 'react-router-dom';

function Header({ onToggle }) {
    return (
        <header className="header">
            <div className="header__inner">
                <Link className="header__logo logo" to="/">
                    <img src="img/logo/qcome_logo01.webp" alt=""></img>
                </Link>

                <button onClick={onToggle}>
                    <img className="header__search icon" id="sliderBtn" src="img/icon/search.webp" alt=""></img>
                </button>
            </div>
        </header>
    );
}

export default Header;