import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db, doc, getDoc } from '../../firebaseConfig';

function Info() {

    // ★ 1. URLからポストのIDを取得
    const { id } = useParams();
    const [postDetail, setPostDetail] = useState(null);
    useEffect(() => {
        //パラメータがある場合
        if (id) {
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
            <img className="borrow__img" src='https://placehold.jp/400x390.png'></img>
            <div className="borrow__inner">

                <div className="borrow__features">
                    <h2 className="borrow__title">{postDetail.title}</h2>
                    <p className='borrow__title'>{postDetail.address}</p>
                    <dl className='borrow__user user'>
                        <dt><img className='post__icon' src="https://placehold.jp/30x30.png"></img></dt>
                        <dd>○さん</dd>
                    </dl>
                    <dl className='borrow__feature'>
                        <dt className='borrow__subtitle'>
                            この物件の特徴
                        </dt>
                        <dd className='borrow__overview'>
                            テストテストテストテストテストテストテストサンプル。
                        </dd>
                    </dl>
                </div>

                <dl className='borrow__info info'>
                    <dt className='info__title'>
                        用途
                    </dt>
                    <dd className='info__overview'>
                        {postDetail.propose}
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
                        この物件の特徴
                    </dt>
                    <dd className='info__overview'>
                        テストテストテストテストテストテストテストサンプル。
                    </dd>
                </dl>

                <dl className='borrow__info info'>
                    <dt className='info__title'>
                        この物件の特徴
                    </dt>
                    <dd className='info__overview'>
                        テストテストテストテストテストテストテストサンプル。
                    </dd>
                </dl>

            </div >
        </section >
    );
}

export default Info;