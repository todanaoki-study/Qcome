import React from "react";
import { Link } from "react-router-dom";

import Post from "../../component/post";

function Log() {
    return (
        <div className="log">
            <div className="log__inner">
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </div>
    );
}

export default Log;