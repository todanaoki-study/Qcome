import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

//todo3種類を一旦ランダムで配置
// const src = [
//     "/img/people/igarasi.webp",
//     "./img/people/"
// ]

function Post({ post }) {
    return (
        <article className='post'>
            <img className='post__img' src="/img/house/living-room-2732939_1280.jpg"></img>
            <div className="post__container">
                <dl className="post__user user">
                    <dt><img className='post__icon icon' src="/img/people/igarasi.webp"></img></dt>
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