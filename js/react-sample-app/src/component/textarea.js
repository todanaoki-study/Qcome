import React from "react";

function Textarea(props) {
    return (
        <div className="form">
            <label className="form__label" htmlFor={props.name}>{props.label}</label>
            <textarea
                className="form__textarea"
                id={props.name}
                name={props.name}              // name属性を設定
                cols="30"                      // propsからcols/rowsを受け取る方が汎用的
                rows="10"
                value={props.value}            // 親からの値を表示
                placeholder={props.placeholder}
                onChange={props.onChange}      // 親のonInputChange関数を実行>
            ></textarea>
        </div >
    );
}

export default Textarea;