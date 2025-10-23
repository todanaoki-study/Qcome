import React from "react";

function Header() {
    return (
        <header class="header">
            <div class="header__inner">
                <a class="header__logo logo" href="#">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </a>
                <img class="header__search" id="sliderBtn" src="https://placehold.jp/30x30.png" alt=""></img>
            </div>
        </header>
    );
}

export default Header;