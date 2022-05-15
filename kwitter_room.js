
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
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

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

  }


  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";

  }

 
  



