import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <Link className="footer__home" to="/">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>
                <Link className="footer__home" to="/chat">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>
                <Link className="footer__home" to="/setting">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>
                <Link className="footer__home" to="/profile">
                    <img src="https://placehold.jp/30x30.png" alt=""></img>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;