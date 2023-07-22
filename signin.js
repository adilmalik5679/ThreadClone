import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyBTAjpP5Xa25OpS_jBo7b3rbnGKm9EVpRk",
    authDomain: "threadclone-52a4f.firebaseapp.com",
    projectId: "threadclone-52a4f",
    storageBucket: "threadclone-52a4f.appspot.com",
    messagingSenderId: "615151661338",
    appId: "1:615151661338:web:8e1f33e383c128c5763ca3",
    measurementId: "G-32ENQ03VD2"
  };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

let signup = document.querySelector('.signin')
 signup.addEventListener('click',()=>{
    // event.preventDefault();
 let email = document.querySelector('#semail').value
 let password = document.querySelector('#spassword').value
 signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
        console.log('data inserted',user)
        location.href = './index.html'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage+errorCode)
      // ..
    });
 })

 





 const handleAuthStateChange = (user) => {
  if (user) {
    
    console.log('User is logged in:', user.email);

    location.href = `./index.html`;

  } else {
  
    console.log('User is logged out');
  }
};

onAuthStateChanged(auth, handleAuthStateChange);