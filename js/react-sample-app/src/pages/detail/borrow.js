import React, { useEffect, useState } from 'react';
//必要な機能をインポート
import { Link } from 'react-router-dom';
import Post from "../../component/post.js";
import Btn from "../../component/btn.js";

//firebaseの機能をインポート
import { db, collection, getDocs, query, where } from "../../firebaseConfig.js";

function Borrow() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // ロード中を管理する状態

    //データの取得を宣言
    const fetchPosts = async () => {
        try {
            const colRef = collection(db, "post"); // コレクション名を "posts" に仮定

            const q = query(colRef, where("state", "==", "public"));

            const snapshot = await getDocs(q);

            const postsData = [];
            snapshot.forEach(doc => {
                // IDを含めたデータを配列に追加
                postsData.push({ id: doc.id, ...doc.data() });
                console.log(doc.data());
            });

            // 状態を更新
            setPosts(postsData);
            setLoading(false); // ロード完了

        } catch (error) {
            console.error("データの取得エラー:", error);
            setLoading(false);
        }
    };

    //読み込み時に一回実行
    useEffect(() => {
        //データ取得
        fetchPosts();
    }, []);
    if (loading) {
        return <h2>投稿データを読み込み中です...</h2>;
    }
    if (posts.length === 0) {
        return <h2>投稿がありません。</h2>;
    }

    return (
        <section className="borrow">
            <div className="borrow__inner">
                {posts.map(post => (
                    <Link key={post.id} to={`/info/${post.id}`}>
                        <Post post={post} ></Post>
                    </Link>
                ))}
                <p className='borrow__end'>現在ある投稿は以上です</p>
            </div>
        </section>
    );
}

export default Borrow;