import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db, doc, getDoc } from '../../firebaseConfig';
import Btn from '../../component/btn';

function Info() {
    // ★ 1. URLからポストのIDを取得
    const { id } = useParams();

    const [postDetail, setPostDetail] = useState(null);
    useEffect(() => {
        //パラメータがある場合
        if (id) {
            console.log(id);
            const fetchPostDetail = async () => {
                const docRef = doc(db, "post", id); // IDを使ってドキュメント参照を作成
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPostDetail(docSnap.data());
                    console.log(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            };
            fetchPostDetail();
        }
    }, [id]); // id が変わったときだけ再実行

    if (!postDetail) {
        return <h2>投稿が見つからないか、読み込み中です...</h2>;
    }

    return (
        <section className="borrow">
            <img className="borrow__img" src='/img/house/living-room-2732939_1280.jpg'></img>
            <div className="borrow__inner">

                <div className="borrow__features features">
                    <div class="features__container">
                        <h2 className="features__title">{postDetail.title}</h2>
                        <p className='features__price'>{postDetail.price}円</p>
                    </div>

                    <dl className='features__user user'>
                        <dt><img className='post__icon' src="https://placehold.jp/30x30.png"></img></dt>
                        <dd>{postDetail.name}</dd>
                    </dl>

                    <dl className='features__container'>
                        <dt
                            className='features__subtitle'>この物件の住所
                        </dt>
                        <dd
                            className='features__address'>{postDetail.address}
                        </dd>

                    </dl>
                </div>

                <dl className='borrow__info info'>
                    <dt className='info__title'>
                        用途
                    </dt>
                    <dd className='info__overview'>
                        {postDetail.purpose}
                    </dd>
                </dl>

                <dl className='borrow__info info'>
                    <dt className='info__title'>
                        上限人数
                    </dt>
                    <dd className='info__overview'>
                        {postDetail.limit}人
                    </dd>
                </dl>

                <dl className='borrow__info info'>
                    <dt className='info__title'>
                        貸出部屋
                    </dt>
                    <dd className='info__overview'>
                        {postDetail.place}
                    </dd>
                </dl>

                <dl className='borrow__info info'>
                    <dt className='info__title'>
                        注意点
                    </dt>
                    <dd className='info__overview'>
                        {postDetail.note}
                    </dd>
                </dl>
            </div >

            <Btn to={`/comms/${id}`} text="貸出人とコンタクト"></Btn>
        </section >
    );
}

export default Info;