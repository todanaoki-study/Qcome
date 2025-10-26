import React from "react";
import { Link } from 'react-router-dom';
//必要な機能を持ってくる
import Form from "../../component/form";
import Textarea from "../../component/textarea";
import Btn from "../../component/btn"

function Write() {
    return (
        <main>
            <section className="lendInfo">
                <div className="lendInfo__inner">
                    <h2 className="lendInfo__title">貸出情報を入力</h2>
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

                    <Btn text=" 次へ" to="/writeChecker"></Btn>
                </div>
            </section>
        </main>
    );
}

export default Write;