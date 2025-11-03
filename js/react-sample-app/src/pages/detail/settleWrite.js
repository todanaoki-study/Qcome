import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../component/btn";

function settleWrite() {
    return (
        <div className="settleWrite">
            <h2 className="settleWrite__title">
                お支払い
            </h2>

            <dl className="settleWrite__list">
                <dt className="settleWrite__item">以下からカードを選択</dt>
                <dd className="settleWrite__item">
                    <img src="https://placehold.jp/30x20.png"></img>
                </dd>
                <dd className="settleWrite__item">
                    <img src="https://placehold.jp/30x20.png"></img>
                </dd>
                <dd className="settleWrite__item">
                    <img src="https://placehold.jp/30x20.png"></img>
                </dd>
                <dd className="settleWrite__item">
                    <img src="https://placehold.jp/30x20.png"></img>
                </dd>
                <dd className="settleWrite__item">
                    <img src="https://placehold.jp/30x20.png"></img>
                </dd>
                <dd className="settleWrite__item">
                    <img src="https://placehold.jp/30x20.png"></img>
                </dd>
            </dl>
        </div>
    );
}

export default settleWrite;