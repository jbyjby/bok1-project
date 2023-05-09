import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyDacF22p-99Eod-rJIFcHrin9o1DBfL-Zs",
    authDomain: "bokyo-ae8cf.firebaseapp.com",
    projectId: "bokyo-ae8cf",
    databaseURL: "https://bokyo-ae8cf-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "bokyo-ae8cf.appspot.com",
    messagingSenderId: "1017021589782",
    appId: "1:1017021589782:web:f69b99fe3bc87e81484837",
    measurementId: "G-8MVNJ1WE8S"
  };
  
//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()