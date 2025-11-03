import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../component/btn";

function Settle() {
    return (
        <div className="settle">
            <div className="settle__inner">
                <p className="settle__title">
                    20XX/YY/ZZ　12:00~21:00に以下の部屋をレンタルします。
                </p>

                <div className="settle__container">
                    <img src="https://placehold.jp/300x400.png"></img>

                    <dl className="settle__list">
                        <dt className="settle__item">あ行</dt>
                        <dd className="settle__item">あいうえお</dd>
                    </dl>

                    <dl className="settle__list">
                        <dt className="settle__item">あ行</dt>
                        <dd className="settle__item">あいうえお</dd>
                    </dl>

                    <dl className="settle__list">
                        <dt className="settle__item">あ行</dt>
                        <dd className="settle__item">あいうえお</dd>
                    </dl>

                    <dl className="settle__list">
                        <dt className="settle__item">あ行</dt>
                        <dd className="settle__item">あいうえお</dd>
                    </dl>
                </div>

                <Btn to="settleWrite" link="/settleWrite"></Btn>
            </div>
        </div>
    );
}

export default Settle;