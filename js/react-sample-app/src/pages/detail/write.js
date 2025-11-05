import React from 'react';
import Textarea from "../../component/textarea";
import Form from '../../component/form';
import Btn from "../../component/btn";

// 親から formData, onInputChange, onNext を受け取る
function FormStep1({ formData, onInputChange, onNext }) {
    return (
        <div>
            <h2 className='write__subTitle'>ステップ 1: 情報を入力してください</h2>

            <Form
                label="お名前"
                name="name"
                placeholder="田中太郎"
                value={formData.name}
                onChange={onInputChange}
            />

            <Form
                label="物件名"
                name="title"              // ★ name属性: formDataのキーと一致させる
                placeholder="物件名"
                value={formData.title}     // ★ value属性: 親Stateの値を渡す
                onChange={onInputChange}   // ★ onChange属性: 親の関数を渡す
            />

            <Form
                label="住所"
                name="address"              // ★ name属性: formDataのキーと一致させる
                placeholder="〇〇県〇〇市"
                value={formData.address}     // ★ value属性: 親Stateの値を渡す
                onChange={onInputChange}   // ★ onChange属性: 親の関数を渡す
            />

            <Textarea
                label="用途"
                name="purpose"
                placeholder="当日、近くの川で花火が上がるので、その席としてご利用ください。そのほか、休憩場や小規模な宴会等にもご利用いただけます。宿泊はできません。"
                value={formData.purpose}
                onChange={onInputChange}
            >
            </Textarea>

            <Textarea
                label="貸出可能な場所"
                name="place"
                placeholder="例:和室、ベランダ、裏庭など"
                value={formData.place}
                onChange={onInputChange}
            >
            </Textarea>

            <Form
                type="number"
                label="人数制限"
                name="limit"              // ★ name属性: formDataのキーと一致させる
                placeholder="3（人）"
                value={formData.limit}     // ★ value属性: 親Stateの値を渡す
                onChange={onInputChange}   // ★ onChange属性: 親の関数を渡す
            />

            <Form
                type="date"
                label="貸出可能な日時"
                name="date"              // ★ name属性: formDataのキーと一致させる
                placeholder="20xx/yy/zz"
                value={formData.date}     // ★ value属性: 親Stateの値を渡す
                onChange={onInputChange}   // ★ onChange属性: 親の関数を渡す
            />

            <Form
                label="金額"
                name="price"              // ★ name属性: formDataのキーと一致させる
                placeholder="例:1000"
                value={formData.price}     // ★ value属性: 親Stateの値を渡す
                onChange={onInputChange}   // ★ onChange属性: 親の関数を渡す
            />

            <Textarea
                label="注意事項"
                name="note"
                placeholder="例:迷惑行為や常識にそぐわない行動が目立つ場合、時間内であっても途中でお帰りいただく場合がございます。"
                value={formData.note}
                onChange={onInputChange}
            >
            </Textarea>

            {/* 次へボタン */}
            <Btn onClick={onNext} text="次へ"></Btn>
        </div>
    );
}

export default FormStep1;