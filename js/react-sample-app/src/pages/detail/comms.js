import React from "react";
import { Link, useParams } from 'react-router-dom';
import Btn from "../../component/btn";

function Comms() {

    const { id } = useParams();

    return (
        <div className="comms">
            <div className="comms__inner">
                <h2 className="comms__attention">相手のメッセージ待ち
                    <br></br>
                    相手からの返信をお待ちください。</h2>

                <p className="comms__explanation">
                    もし相手とのやり取りを通して、相手が貸出を認証した場合、以下のような決済URLが送信されます。
                </p>

                <article className="comms__post" id="commsMe">
                    <p className="comms__test">こんにちわ！OOです！募集を見て20XX/YY/ZZにお部屋を借りたいと思いご連絡しました。</p>

                </article>

                <article className="comms__post" id="commsPartner">
                    <p className="comms__test">以下のボタンから決済と予約を確定してください。</p>
                    <Btn text="決済" to={`/settle/${id}`}></Btn>
                </article>
            </div>
        </div>
    );
}

export default Comms;