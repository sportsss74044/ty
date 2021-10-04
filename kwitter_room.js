
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAaMNMCT3VZVSZZQiorndh-iQH3gvUH1pk",
      authDomain: "classtest-9a209.firebaseapp.com",
      projectId: "classtest-9a209",
      storageBucket: "classtest-9a209.appspot.com",
      messagingSenderId: "145624866108",
      appId: "1:145624866108:web:8a9b8463ecea3835919239"
    };
    
    // Initialize Firebase
  var app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +""</div><hr></hr>
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";

}