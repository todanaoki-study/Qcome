import React from "react";
import { Link } from "react-router-dom";

function Steps() {
    return (
        <div class="pan">
            <div class="pan__inner">
                <ul class="pan__container">
                    <li class="pan__pointer pan__you">あなたの情報</li>
                    <li class="pan__pointer pan__lend">貸出情報</li>
                    <li class="pan__pointer pan__plice">貸出金額</li>
                    <li class="pan__pointer pan__check">確認</li>
                </ul>
            </div>
        </div>
    );
}

export default Steps;