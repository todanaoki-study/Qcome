import React, { useEffect, useState } from 'react';
//必要な機能をインポート
import { Link } from 'react-router-dom';
import Btn from "../../component/btn.js";

import FormStep1 from './write.js';
import ConfirmStep2 from './writeChecker.js';

//firebaseのインポート
import { db, collection, addDoc } from "../../firebaseConfig.js"

function EntryPage() {
    // 1. フォームデータ全体を一つのオブジェクトで管理
    const [formData, setFormData] = useState({
        title: '',//物件名
        address: '',//住所
        purpose: '',//用途
        place: '',//貸し出す部屋
        price: '',//価格
        date: '',//日付
        limit: '',//人数
        note: '',//備考
        state: 'public',//公開状態
    });

    // 2. 現在のステップを管理 (1:入力, 2:確認, 3:完了)
    const [step, setStep] = useState(1);

    // 3. 子コンポーネントから受け取った入力値を更新する関数
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    //データの追加/更新
    const handleSubmit = async () => {
        try {
            const collectionRef = collection(db, "post");
            const newDocRef = await addDoc(collectionRef, formData);
            console.log("新しいドキュメントが追加されました。ID: ", newDocRef.id);
            setStep(3);
        } catch (e) {
            console.error("データ追加中にエラーが発生しました: ", e);
        }
    };

    // 5. ステップの表示を切り替える
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <FormStep1
                        formData={formData}               // 現在のデータを渡す
                        onInputChange={handleInputChange} // 入力変更時の関数を渡す
                        onNext={() => setStep(2)}         // 次へ進む関数を渡す
                    />
                );
            case 2:
                return (
                    <ConfirmStep2
                        formData={formData}         // 確認用にデータを渡す
                        onBack={() => setStep(1)}   // 戻る関数を渡す
                        onPost={handleSubmit}       // 投稿（Firebase送信）関数を渡す
                    />
                );
            case 3:
                return (
                    <div>
                        <h2>投稿完了しました！</h2>
                        <p>ご協力ありがとうございます。</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className='write'>
            <div class="write__inner">
                <h1 className='write__title'>貸出情報を入力・確認</h1>
                {renderStep()}
            </div>
        </section>
    );
}

export default EntryPage;