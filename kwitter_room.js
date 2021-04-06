// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCldcGrocMDvWunme9zY7e3ezmIVCOZWU4",
      authDomain: "kwitter-9f344.firebaseapp.com",
      databaseURL: "https://kwitter-9f344-default-rtdb.firebaseio.com",
      projectId: "kwitter-9f344",
      storageBucket: "kwitter-9f344.appspot.com",
      messagingSenderId: "992192273186",
      appId: "1:992192273186:web:987315f746e4dc604ae37b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
