import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Btn from "../../component/btn";

//firebaseのインポート
import { db, doc, getDoc, collection } from "../../firebaseConfig.js"

function Settle() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {

        console.log(id);
        const fetchPostDetail = async () => {
            const docRef = doc(db, "post", id); // IDを使ってドキュメント参照を作成
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPost(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("No such document!");
            }
        };
        fetchPostDetail();
    }, [id]); // id が変わったときだけ再実行

    if (!post) {
        // データを取得していない間は、このメッセージが表示されます
        return <div>投稿情報を読み込み中です...</div>;
    }

    return (
        <div className="settle">
            <div className="settle__inner">
                <p className="settle__title">
                    {post.date}に以下の部屋をレンタルします。
                </p>

                <div className="settle__container">
                    <img className='settle__img' src="/img/house/living-room-2732939_1280.jpg"></img>

                    <div className='settle__content'>
                        <dl className="settle__list">
                            <dt className="settle__item">貸出人</dt>
                            <dd className="settle__item">{post.name}</dd>
                        </dl>
                        <dl className="settle__list">
                            <dt className="settle__item">物件</dt>
                            <dd className="settle__item">{post.title}</dd>
                        </dl>
                        <dl className="settle__list">
                            <dt className="settle__item">住所</dt>
                            <dd className="settle__item">{post.address}</dd>
                        </dl>
                        <dl className="settle__list">
                            <dt className="settle__item">用途</dt>
                            <dd className="settle__item">{post.purpose}</dd>
                        </dl>

                        <dl className="settle__list">
                            <dt className="settle__item">注意事項</dt>
                            <dd className="settle__item">{post.note}</dd>
                        </dl>
                    </div>
                </div>

                {/* パスが../じゃないと「./settle/settleWrite」になってしまうので強引ですが,,, */}
                <Btn text="決済へ" to={`../settleWrite/${id}`}></Btn>
            </div>
        </div>
    );
}

export default Settle;