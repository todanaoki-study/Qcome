import React from "react";
import { Link } from 'react-router-dom';

function Setting() {
    return (
        <section class="setting">
            <div class="setting__inner">
                <h2 class="setting__title">支払い&受け取り</h2>
                <ul class="setting__list">
                    <li class="setting__item"><a href="#">お支払い方法</a></li>
                    <li class="setting__item"><a href="#">報酬受け取り方法</a></li>
                </ul>

                <h2 class="setting__title">設定</h2>
                <ul class="setting__list">
                    <li class="setting__item"><a href="#">通知設定</a></li>
                    <li class="setting__item"><a href="#">言語設定</a></li>
                </ul>

                <h2 class="setting__title">サポート</h2>
                <ul class="setting__list">
                    <li class="setting__item"><a href="#">よくある質問</a></li>
                    <li class="setting__item"><a href="#">ヘルプ</a></li>
                    <li class="setting__item"><a href="#">このアプリをレビューする</a></li>
                </ul>

                <h2 class="setting__title">利用規約</h2>
                <ul class="setting__list">
                    <li class="setting__item"><a href="#">利用規約・禁止事項</a></li>
                    <li class="setting__item"><a href="#">プライバシーポリシー</a></li>
                    <li class="setting__item"><a href="#">バージョン</a></li>
                </ul>

                <h2 class="setting__title">アカウント</h2>
                <ul class="setting__list">
                    <li class="setting__item"><a href="#">サインアウトする</a></li>
                    <li class="setting__item setting__attention"><a href="#">アカウントを削除する</a></li>
                </ul>

            </div>
        </section>
    );
}


export default Setting;