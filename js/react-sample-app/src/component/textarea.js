import React from "react";

function Textarea(props) {
    return (
        <label className="form">
            <label className="form__label" htmlFor={props.name}>{props.label}</label>
            <textarea className="form__textarea" htmlFor={props.name} id={props.name} cols="30" rows="10"
                placeholder={props.placeholder}></textarea>
        </label >
    );
}

export default Textarea;