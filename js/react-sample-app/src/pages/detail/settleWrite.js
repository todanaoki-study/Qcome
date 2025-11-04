import React from "react";
import { Link, useParams } from 'react-router-dom';
import Btn from "../../component/btn";
import Form from "../../component/form";

//firebaseのインポート
import { db, doc, setDoc, updateDoc } from "../../firebaseConfig.js"

function SettleWrite() {

    const { id } = useParams();
    console.log(id);
    const target = doc(db, "post", id);
    const data = {
        state: "private"//非公開にする。
    }
    updateDoc(target, data)
        .then(() => {
            console.log(target);
        })

        .catch((error) => {
            console.error(error);
        });

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

            <Form label="カード番号"></Form>

            <div className="settleWrite__list">
                <Form label="有効期限"></Form>
                <Form label="セキュリティコード"></Form>
            </div>

            <Btn to="/" text="確定"></Btn>

        </div>
    );
}

export default SettleWrite;