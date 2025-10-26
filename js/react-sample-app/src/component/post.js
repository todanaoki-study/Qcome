import React from "react";

function Post() {
    return (
        <article className="post">
            <img className="post__img" src="https://placehold.jp/100x140.png" alt=""></img>
            <div className="post__info">
                <div className="post__user">
                    <img className="post__userIcon" src="https://placehold.jp/30x30.png" alt=""></img>
                    <p className="post__userName">ユーザー名</p>
                </div>
                <h2 className="post__title">タイトルタイトルタイトルタイトル</h2>
                <p className="post__overview">東京都渋谷区</p>
            </div>
        </article>
    );
}

export default Post;