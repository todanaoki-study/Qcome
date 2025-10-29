// import React from "react";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

//必要な機能を持ってくる
import Form from "../../component/form";
import Textarea from "../../component/textarea";
import Btn from "../../component/btn"
import Attention from "./attention";

//firebaseのインポート
import { db, collection, addDoc, doc } from "../../firebaseConfig";

//firebaseにデータをセットする処理を宣言
const addPost = async (data) => {
    try {
        const collectionRef = collection(db, "post");
        const newDocRef = await addDoc(collectionRef, data);
        console.log("新しいドキュメントが追加されました。ID: ", newDocRef.id);
    } catch (e) {
        console.error("データ追加中にエラーが発生しました: ", e);
    }
};

function WriteChecker() {
    //attention表示
    const [isAttentionOpen, setIsAttentionOpen] = useState(false);

    //このページのボタンのクリック時の処理
    //(attentionの表示と、firebaseへのデータ追加)
    const handleNextStep = () => {
        console.log("開いた（仮）");
        setIsAttentionOpen(prev => !prev);

        //以下firebase
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const purpose = document.getElementById("purpose").value;
        const place = document.getElementById("place").value;
        const limit = document.getElementById("limit").value;
        const date = document.getElementById("date").value;
        const note = document.getElementById("note").value;

        const postData = {
            title: name,
            address: address,
            purpose: purpose,
            place: place,
            limit: limit,
            date: date,
            note: note,
        }

        addPost(postData);
    }

    return (
        <main>
            <section className="lendInfo">
                <div className="lendInfo__inner">
                    <h2 className="lendInfo__title">入力内容を確認</h2>
                    <Form
                        label="物件名" name="name" id="name" placeholder="物件名">
                    </Form>
                    <Form
                        label="住所" name="address" id="address" placeholder="住所">
                    </Form>

                    <Textarea label="用途" name="purpose" id="purpose"
                        placeholder="当日、近くの川で花火が上がるので、その席としてご利用ください。そのほか、休憩場や小規模な宴会等にもご利用いただけます。宿泊はできません。">

                    </Textarea>

                    <Form
                        label="貸出可能な場所" name="place" id="place" placeholder="例:ベランダ、和室">
                    </Form>

                    <Form
                        label="人数制限" name="limit" type="number" id="limit" placeholder="3人まで">
                    </Form>

                    <Form
                        label="貸出日時" name="date" id="date" type="date">
                    </Form>

                    <Textarea label="備考" name="note" id="note"
                        placeholder="迷惑行為や常識にそぐわない行動が目立つ場合、時間内であっても途中でお帰りいただく場合がございます。">

                    </Textarea>

                    <Btn onClick={handleNextStep} text="次へ" ></Btn>
                </div>
            </section>
            <Attention isOpen={isAttentionOpen} onClose={handleNextStep}></Attention>
        </main>
    );
}

export default WriteChecker;