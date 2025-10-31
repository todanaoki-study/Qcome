import React from "react";

function Form(props) {
    return (
        <div className="form">
            <label className="form__label" htmlFor={props.name}>
                {props.label}
            </label>
            {/* デフォルトはtype="text"の形式にしてあります */}
            {/* <input className="form__input"
                type={props.type || "text"} id={props.name} name={props.name} placeholder={props.placeholder}>
            </input> */}
            <input
                className="form__input"
                type={props.type || "text"}
                id={props.name}
                name={props.name}           // ★ name属性は必須 (親のhandleInputChangeで使われる)
                placeholder={props.placeholder}
                value={props.value}          // ★ value属性は必須 (ReactのStateで制御するため)
                onChange={props.onChange}    // ★ onChangeイベントハンドラを設定
            />
        </div>
    );
}

export default Form;

//todo formをnameなのかmailなのか切り替えをできるようにする