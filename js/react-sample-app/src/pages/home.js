import React from "react";
import { Link } from 'react-router-dom';
import Post from "../component/post.js";
import Btn from "../component/btn.js";

function Home() {
    return (
        <main className="home">
            <div className="home__switching switching">
                <div className="switching__container">
                    <h1 className="switching__brrow tab">借りる</h1>
                    <h1 className="switching__lend tab">貸す</h1>
                </div>
            </div>
            <section className="brrow">
                <div className="brrow__inner">
                    {/* 以下仮配置 */}
                    <Post></Post>
                </div>
            </section>

            <section className="lend">
                <div className="lend__inner">
                    <h2 className="lend__title">空いている部屋を有効活用して報酬をゲットしよう!!</h2>
                    <p className="lend__question">部屋を貸すとは？</p>

                    <Btn text="開始" to="write"></Btn>
                </div>
            </section>
        </main >
    );
}

export default Home;