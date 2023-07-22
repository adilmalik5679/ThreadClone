import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore,doc,addDoc,collection,serverTimestamp,onSnapshot,query,orderBy} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTAjpP5Xa25OpS_jBo7b3rbnGKm9EVpRk",
  authDomain: "threadclone-52a4f.firebaseapp.com",
  projectId: "threadclone-52a4f",
  storageBucket: "threadclone-52a4f.appspot.com",
  messagingSenderId: "615151661338",
  appId: "1:615151661338:web:8e1f33e383c128c5763ca3",
  measurementId: "G-32ENQ03VD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let UserMsg = document.querySelector('.mainMsg')
let sndMsg = document.querySelector("#createMsg")
sndMsg.addEventListener('click',async ()=>{
    
  console.log(UserMsg.value)
 try{
  
  const docRef = await addDoc(collection(db,'comments'),{


    
    // UserName : userName,
    UserMsg : UserMsg.value,   
    createdAt: serverTimestamp()

 })    
 console.log('document Id', docRef.id)
}
 catch(e){
     console.log(e)
 }

})



document.addEventListener('readystatechange',()=>{
  console.log(`document ready ${document.readyState}`)
  
  const q = query(collection(db, "comments"),orderBy("timestamp", "desc"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    
    let main_div = document.querySelector('.maindiv')
   querySnapshot.forEach((doc) => {
        let data = doc.data()

           console.log(data.UserMsg)
    
           
          


         let comment_div = document.createElement('div')
         comment_div.classList.add('comments')
      
         let post_div = document.createElement('div')
         post_div.classList.add('postdiv')
      
         let userInfo = document.createElement('div')
         userInfo.classList.add('userInfo')

         let UserText = document.createElement('div')
         UserText.classList.add('userText')
        
         let blank = document.createElement('span')
         blank.classList.add('blank')
      
         let postUserText = document.createElement('div')
          postUserText.classList.add('pastTextdiv')

         let username = document.createElement('div')
         username.classList.add('username')

         let user_inp = document.createElement('input')
         user_inp.classList.add('usermsg')

         let user_btn = document.createElement('button')
        user_btn.classList.add('.btn')

         let replyDiv = document.createElement('div')
          replyDiv.classList.add('replyDiv')
          
         let user = document.createElement('div')
          user.classList.add('user')
         let msg = document.createElement('div')
         msg.classList.add('msg')
         let blank2 = document.createElement('span')
         
         UserText.innerHTML = 'hello world'
               
         userInfo.appendChild(text_Node)
         UserText.appendChild(text_Node)
         username.appendChild(text_Node)
         user.appendChild(text_Node)
         msg.appendChild(text_Node)


         comment_div.appendChild(post_div)
         post_div.appendChild(userInfo)
         post_div.appendChild(UserText)
         post_div.appendChild(blank)
         comment_div.appendChild(postUserText)
         postUserText.appendChild(username)
         postUserText.appendChild(user_inp)
         postUserText.appendChild(user_btn)
         comment_div.appendChild(replyDiv)
         replyDiv.appendChild(user)
         replyDiv.appendChild(msg)
         replyDiv.appendChild(blank2)
         main_div.appendChild(comment_div);

         



   });        
       


  })


})
























// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}