import React from "react";

function Form(props) {
    return (
        <label className="form">
            <label className="form__label" htmlFor={props.name}>{props.label}</label>
            {/* デフォルトはtype="text"の形式にしてあります */}
            <input className="form__input" type={props.type || "text"} id={props.name} name={props.name} placeholder={props.placeholder}>
            </input>
        </label>
    );
}

export default Form;

//todo formをnameなのかmailなのか切り替えをできるようにする