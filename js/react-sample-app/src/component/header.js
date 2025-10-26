import React from "react";
import { Link } from 'react-router-dom';

function Header({ onToggle }) {
    return (
        <header className="header">
            <div className="header__inner">
                <Link className="header__logo logo" to="/">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>

                <button onClick={onToggle}>
                    <img className="header__search" id="sliderBtn" src="https://placehold.jp/30x30.png" alt=""></img>
                </button>
            </div>
        </header>
    );
}

export default Header;