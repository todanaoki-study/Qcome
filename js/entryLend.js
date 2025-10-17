import { db } from "./firebaseConfig.js";
import { doc, collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.2.1//firebase-firestore.js";

//URLからパラメーターを取得
const params = new URLSearchParams(window.location.search);
const docId = params.get('docId');

console.log("取得したドキュメントID:", docId);

const setInformation = {
    name: "",
    birthday: "",
    gender: "",
    nickname: "",
    occupation: "",
}

const enterBtn = document.getElementById("infoEnter");

enterBtn.addEventListener("click", async () => {
    try {
        setInformation.name = document.getElementById('name').value;
        setInformation.birthday = document.getElementById('birthday').value;
        setInformation.gender = document.getElementById("gender").value;
        setInformation.nickname = document.getElementById('nickname').value;
        setInformation.occupation = document.getElementById('occupation').value;

        //取得するコレクションを指定
        const docRef = doc(db, "spaces", docId);
        // addDocを使って新しいドキュメントを追加
        await setDoc(docRef, setInformation);
        console.log("新しいドキュメントが正常に追加されました。ID:", docRef.id);

        // 成功後の処理（例: 完了画面へ遷移）
        window.location.href = `../lend/place.html?docId=${docId}`;

    } catch (e) {
        console.error("ドキュメントの追加中にエラーが発生しました:", e);
    }
});