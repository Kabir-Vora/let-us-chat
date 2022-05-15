//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCVvGGFF8XT4pjxi3333_bge-KuHkjy4lk",
      authDomain: "kwitter-d7ddb.firebaseapp.com",
      databaseURL: "https://kwitter-d7ddb-default-rtdb.firebaseio.com",
      projectId: "kwitter-d7ddb",
      storageBucket: "kwitter-d7ddb.appspot.com",
      messagingSenderId: "913306021928",
      appId: "1:913306021928:web:4197d1e1de45163443c51d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(Config);

    function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        likes:0
      });
      document.getElementById("msg").value = " "
    }


    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  
    }
  