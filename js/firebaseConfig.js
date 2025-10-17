//必要な機能をインポート
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc, addDoc } from 'https://www.gstatic.com/firebasejs/12.2.1//firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyC5TilpFd8XsQw2Rn8HIvZwGy2M6LjLBFM",
    authDomain: "localview-54b58.firebaseapp.com",
    projectId: "localview-54b58",
    storageBucket: "localview-54b58.firebasestorage.app",
    messagingSenderId: "1069701515364",
    appId: "1:1069701515364:web:b755f4db633ba10820b771",
    measurementId: "G-C2CYXPGWXQ"
};

// fireBaseを初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//他のファイルでfirebaseの設定を使えるようにする
export { db };