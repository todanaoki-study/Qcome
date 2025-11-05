import React from "react";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <section className="profile">
            <div className="profile__inner">
                <dl className="profile__info">
                    <dt className="profile__infoItem">
                        <img className="profile__icon" src="/img/people/igarasi.webp" alt=""></img>
                    </dt>
                    <dd className="profile__nameContent">
                        <p className="profile__name">IGARAしげってもいい？</p>
                        <img className="profile__marker" src="/img/medal/blond02.webp" alt=""></img>
                    </dd>
                </dl>

                <ul className="profile__list">
                    <li className="profile__item">20XX/YY/ZZ</li>
                    <li className="profile__item">満20歳</li>
                    <li className="profile__item">職業XX</li>
                </ul>

                <p className="profile__overview">知らない学校の旗当番をするのが趣味です。</p>

                <a className="profile__attention" href="#">プロフィールを編集</a>

                <ul className="profile__edit">
                    <li className="profile__editBtn">
                        <a className="profile__btn" href="#">予約状況</a>
                    </li>

                    <li className="profile__editBtn">
                        <a className="profile__btn" href="#">お気に入り</a>
                    </li>

                    <li className="profile__editBtn">
                        <a className="profile__btn" href="#">貸出状況</a>
                    </li>

                    <li className="profile__editBtn">
                        <a className="profile__btn" href="#">下書き</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Profile;