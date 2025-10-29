import React, { useEffect, useState } from 'react';
//必要な機能をインポート
import { Link } from 'react-router-dom';
import Btn from "../../component/btn.js";

function Lend() {
    return (
        <section className="lend">
            <div className="lend__inner">
                <h2 className="lend__title">空いている部屋を有効活用して報酬をゲットしよう!!</h2>
                <p className="lend__question">部屋を貸すとは？</p>

                <Btn text="開始" to="write"></Btn>
            </div>
        </section>
    );
}


export default Lend;