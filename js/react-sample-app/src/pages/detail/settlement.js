import React from "react";
import { Link, useParams } from 'react-router-dom';
import Btn from "../../component/btn";


function Settle() {
    const { id } = useParams();
    console.log(id);
    return (
        <div className="settle">
            <div className="settle__inner">
                <p className="settle__title">
                    20XX/YY/ZZ　12:00~21:00に以下の部屋をレンタルします。
                </p>

                <div className="settle__container">
                    <img src="/img/house/living-room-2732939_1280.jpg"></img>

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

                {/* パスが../じゃないと「./settle/settleWrite」になってしまうので強引ですが,,, */}
                <Btn text="決済へ" to={`../settleWrite/${id}`}></Btn>
            </div>
        </div>
    );
}

export default Settle;