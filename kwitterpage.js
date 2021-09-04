
var firebaseConfig = {
  apiKey: "AIzaSyAyjHtZ6GaMflLc3XMjqnOAco5p1SGi7Uc",
  authDomain: "chatting-app-2e8a4.firebaseapp.com",
  databaseURL: "https://chatting-app-2e8a4-default-rtdb.firebaseio.com",
  projectId: "chatting-app-2e8a4",
  storageBucket: "chatting-app-2e8a4.appspot.com",
  messagingSenderId: "1003405081347",
  appId: "1:1003405081347:web:843eb685ce4bceebc14736",
  measurementId: "G-2E8VS092YD"
};

  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }