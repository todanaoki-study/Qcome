import React from 'react';
import Btn from "../../component/btn";

// 親から formData, onBack, onPost を受け取る
function ConfirmStep2({ formData, onBack, onPost }) {
    return (
        <div>
            <h2 className='write__subTitle'>ステップ 2: 入力内容を確認してください</h2>

            <p className='write__container'>
                <strong className='write__label'>物件名:</strong> {formData.title}
            </p>

            <p className='write__container'>
                <strong className='write__label'>住所:</strong> {formData.address}
            </p>

            <p className='write__container'>
                <strong className='write__label'>用途</strong> {formData.purpose}
            </p>

            <p className='write__container'>
                <strong className='write__label'>貸出可能な部屋:</strong> {formData.place}
            </p>

            <p className='write__container'>
                <strong className='write__label'>人数制限:</strong> {formData.limit}
            </p>

            <p className='write__container'>
                <strong className='write__label'>貸出日時:</strong> {formData.date}
            </p>

            <p className='write__container'>
                <strong className='write__label'>注意事項:</strong> {formData.note}
            </p>


            <div className=''>
                <Btn onClick={onBack} text="修正"></Btn>
                <Btn onClick={onPost} text="公開に進む"></Btn>
            </div>
        </div>
    );
}

export default ConfirmStep2;