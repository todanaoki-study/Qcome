import React from "react";
import { Link } from 'react-router-dom';

import Btn from "./btn";

function Attention({ isOpen, onClose }) {

    const attentionClass = isOpen ? "attention attention-open" : "attention-close";

    return (
        <div className={attentionClass}>
            <div class="attention__inner">
                <h2 className="attention__title">わんくっしょん</h2>
                <div className="attention__container">
                    <Btn text="一時保存して戻る" to="/"></Btn>
                    <Btn text="確定" to="/"></Btn>
                </div>
            </div>
        </div>
    );
}

export default Attention;