import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <Link className="footer__home" to="/">
                    <img src="img/icon/home.webp" alt=""></img>
                </Link>
                <Link className="footer__home" to="/chat">
                    <img src="img/icon/chat.webp" alt=""></img>
                </Link>
                <Link className="footer__home" to="/setting">
                    <img src="img/icon/setting.webp" alt=""></img>
                </Link>
                <Link className="footer__home" to="/profile">
                    <img src="img/icon/human.webp" alt=""></img>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;