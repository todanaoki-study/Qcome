import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer__inner">
                <Link class="footer__home" to="/">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>
                <Link class="footer__home" to="/chat">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>
                <Link class="footer__home" to="/setting">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>
                <Link class="footer__home" to="/profile">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>

            </div>
        </footer>
    )
}

export default Footer;