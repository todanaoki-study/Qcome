import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../component/btn";

function Comms() {
    return (
        <div className="comms">
            <div className="comms__inner">
                <h2 className="comms__attention">相手のメッセージ待ち
                    <br></br>
                    相手からの返信をお待ちください。</h2>

                <p className="comms__explanation">
                    もし相手とのやり取りを通して、相手が貸出を認証した場合、以下のような決済URLが送信されます。
                </p>

                <article>
                    <p>以下のボタンから決済と予約を確定してください。</p>
                    <Btn text="決済" to="/settle"></Btn>
                </article>
            </div>
        </div>
    );
}

export default Comms;