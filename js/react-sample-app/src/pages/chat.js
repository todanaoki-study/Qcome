import React from "react";
import { Link } from 'react-router-dom';

function Chat() {
    return (
        <section className="chat">
            <div className="chat__inner">
                <h2 className="chat__title">チャット</h2>

                <dl className="chat__content">
                    <dt className="chat__icon">
                        <img className="chat__icon icon" src="/img/people/man03.webp" alt=""></img>
                    </dt>
                    <dd className="chat__text">
                        <Link to="/comms">
                            こんにちワン！ご応募ありがとうございます！テストテストテストテスト
                        </Link>
                    </dd>
                </dl>

                <dl className="chat__content">
                    <dt className="chat__icon">
                        <img className="chat__icon icon" src="/img/people/man03.webp" alt=""></img>
                    </dt>
                    <dd className="chat__text">
                        <Link to="/comms">
                            こんにちワン！ご応募ありがとうございます！テストテストテストテスト
                        </Link>
                    </dd>
                </dl>

                <dl className="chat__content">
                    <dt className="chat__icon">
                        <img className="chat__icon icon" src="/img/people/man03.webp" alt=""></img>
                    </dt>
                    <dd className="chat__text">
                        <Link to="/comms">
                            こんにちワン！ご応募ありがとうございます！テストテストテストテスト
                        </Link>
                    </dd>
                </dl>

                <dl className="chat__content">
                    <dt className="chat__icon">

                        <img className="chat__icon icon" src="/img/people/man03.webp" alt=""></img>
                    </dt>
                    <dd className="chat__text">
                        <Link to="/comms">
                            こんにちワン！ご応募ありがとうございます！テストテストテストテスト
                        </Link>
                    </dd>
                </dl>

                <dl className="chat__content">
                    <dt className="chat__icon">
                        <img className="chat__icon icon" src="/img/people/man03.webp" alt=""></img>
                    </dt>
                    <dd className="chat__text">
                        <Link to="/comms">
                            こんにちワン！ご応募ありがとうございます！テストテストテストテスト
                        </Link>
                    </dd>
                </dl>

            </div>
        </section>
    );
}

export default Chat;