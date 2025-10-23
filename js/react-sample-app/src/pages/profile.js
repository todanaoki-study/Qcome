import React from "react";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <section class="profile">
            <div class="profile__inner">
                <dl class="profile__info">
                    <dt class="profile__infoItem">
                        <img class="profile__icon" src="https://placehold.jp/100x100.png" alt=""></img>
                    </dt>
                    <dd class="profile__nameContent">
                        <p class="profile__name">IGARAしげってもいい？</p>
                        <img class="profile__marker" src="https://placehold.jp/30x30.png" alt=""></img>
                    </dd>
                </dl>

                <ul class="profile__list">
                    <li class="profile__item">20XX/YY/ZZ</li>
                    <li class="profile__item">満20歳</li>
                    <li class="profile__item">職業XX</li>
                </ul>

                <p class="profile__overview">知らない学校の旗当番をするのが趣味です。</p>

                <a class="profile__attention" href="#">プロフィールを編集</a>

                <ul class="profile__edit">
                    <li class="profile__editBtn">
                        <a class="profile__btn" href="#">予約状況</a>
                    </li>

                    <li class="profile__editBtn">
                        <a class="profile__btn" href="#">お気に入り</a>
                    </li>

                    <li class="profile__editBtn">
                        <a class="profile__btn" href="#">貸出状況</a>
                    </li>

                    <li class="profile__editBtn">
                        <a class="profile__btn" href="#">下書き</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Profile;