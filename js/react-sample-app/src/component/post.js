import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Post({ post }) {
    return (
        <article className='post'>
            <img src="https://placehold.jp/100x140.png"></img>
            <div className="post__container">
                <dl className="post__user user">
                    <dt><img className='post__icon≈' src="https://placehold.jp/30x30.png"></img></dt>
                    <dd>○さん</dd>
                </dl>
                <h2>{post.title}</h2>
                <p>{post.address}</p>
                <p>{post.purpose}</p>
            </div>
        </article>
    );
}

export default Post;