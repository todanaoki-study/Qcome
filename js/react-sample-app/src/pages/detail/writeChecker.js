// import React from "react";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
//必要な機能を持ってくる
import Form from "../../component/form";
import Textarea from "../../component/textarea";
import Btn from "../../component/btn"

import Attention from "../../component/attention";

function WriteChecker() {

    const [isAttentionOpen, setIsAttentionOpen] = useState(false);

    const toggleAttention = () => {
        console.log("開いた（仮）");
        setIsAttentionOpen(prev => !prev);
    }

    return (
        <main>
            <section className="lendInfo">
                <div className="lendInfo__inner">
                    <h2 className="lendInfo__title">入力内容を確認</h2>
                    <Form
                        label="物件名" name="name" placeholder="物件名">
                    </Form>
                    <Form
                        label="住所" name="address" placeholder="住所">
                    </Form>

                    <Textarea label="用途" name="purpose"
                        placeholder="当日、近くの川で花火が上がるので、その席としてご利用ください。そのほか、休憩場や小規模な宴会等にもご利用いただけます。宿泊はできません。">

                    </Textarea>

                    <Form
                        label="貸出可能な場所" name="place" placeholder="例:ベランダ、和室">
                    </Form>

                    <Form
                        label="人数制限" name="limit" type="number" placeholder="3人まで">
                    </Form>

                    <Form
                        label="貸出日時" name="date" type="date">
                    </Form>

                    <Textarea label="備考" name="note"
                        placeholder="迷惑行為や常識にそぐわない行動が目立つ場合、時間内であっても途中でお帰りいただく場合がございます。">

                    </Textarea>

                    <Btn onClick={toggleAttention} text="次へ" ></Btn>
                </div>
            </section>
            <Attention isOpen={isAttentionOpen} onClose={toggleAttention}></Attention>
        </main>
    );
}

export default WriteChecker;