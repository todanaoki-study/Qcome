import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Post from "../../component/post";
import Btn from "../../component/btn";
import GetInfo from "../../component/getInfo";

function Borrow() {
    return (
        <section className="borrow">
            <img className="borrow__img" src="https://placehold.jp/390x288.png" alt=""></img>
            <div className="borrow__inner">
                <Post></Post>
            </div>
            <Btn text="貸出人とコンタクト" to="/chat"></Btn>
            <GetInfo></GetInfo>
        </section>
    );
}

export default Borrow;