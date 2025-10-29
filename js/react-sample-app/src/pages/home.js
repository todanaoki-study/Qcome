import React, { useEffect, useState } from 'react';

//必要な機能をインポート
import { Link } from 'react-router-dom';
import Borrow from "./detail/borrow";
import Lend from "./detail/lend";


function Home() {

    const [activeTab, setActiveTab] = useState('borrow');
    // タブをクリックしたときの処理
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <main className="home">

            {/* 切り替えようボタン */}
            <div className="home__switching switching">
                <button
                    className={activeTab === 'borrow' ? 'switching__btn activeTab' : 'switching__btn'}
                    onClick={() => handleTabClick('borrow')}
                >借りる
                </button>

                <button
                    className={activeTab === 'lend' ? 'switching__btn activeTab' : 'switching__btn'}
                    onClick={() => handleTabClick('lend')}
                >貸す
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'borrow' && <Borrow />}
                {activeTab === 'lend' && <Lend />}
            </div>

        </main >
    );
}

export default Home;