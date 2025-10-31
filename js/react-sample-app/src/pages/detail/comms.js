import React from "react";
import { Link } from "react-router-dom";

function Comms() {
    return (
        <div className="comms">
            <div className="comms__inner">
                <h2 className="comms__attention">相手のメッセージ待ち
                    <br></br>
                    相手からの返信をお待ちください。</h2>
            </div>
        </div>
    );
}

export default Comms;