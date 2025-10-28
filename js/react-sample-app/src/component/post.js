import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { db, collection, getDocs } from "../firebaseConfig.js";

const post = null;;

const colPost = () => {
    const colRef = collection(db, "post");

    getDocs((colRef))
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                post = `
                <article className="post">
                <img className="post__img" src="https://placehold.jp/100x140.png" alt=""></img>
                <Link className="post__info" to="/borrow">
                <div className="post__user">
                    <img className="post__userIcon" src="https://placehold.jp/30x30.png" alt=""></img>
                    <p className="post__userName">ユーザー名</p>
                </div>
                <h2 className="post__title">${doc.title}</h2>
                <p className="post__overview">${doc.address}</p>
                </Link>
                </article>
        `;
            });
        })
        .catch((error) => {
            console.error(error);
        })
}

function Post() {
    colPost();

    return (
        post
    );
}

export default Post;