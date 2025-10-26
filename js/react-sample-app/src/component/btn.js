import React from "react";
import { Link } from 'react-router-dom';

function Btn(props) {

    const isLinkButton = props.to;

    //aタグが必要なボタン
    if (isLinkButton) {
        return (
            <Link className="btn" to={props.to}>
                <span>{props.text}</span>
            </Link>
        );
    }
    //aタグが必要ない処理用ボタン
    //ここにonClick={onToggle}を入れたい。
    return (
        <button type={props.type || "button"} className="btn" onClick={props.onClick}>{props.text}</button>
    );

}

export default Btn;