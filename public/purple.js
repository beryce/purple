var id;
var name;
var bio;
var numClickEdits = 0;

function signIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");


function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      // preview.setAttribute('src', e.target.result);
      document.getElementById("prof_pic").setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
  // document.getElementById("prof_pic").hidden = true;
}

function signOut() {
  firebase.auth().signOut();
  window.location.redirect("https://purple-4ecfa.firebaseapp.com/");
}

function authStateObserver(user) {
  if (user) { // User is signed in!
    id = firebase.auth().currentUser.uid;
    name = firebase.auth().currentUser.displayName;
    bio = firebase.auth().currentUser.bio;
    document.getElementById("profile").href = "profile.html?id=" + id;
    document.getElementById("forum").href = "feed.html?id=" + id;
    document.getElementById("leaderboard").href = "leaderboard.html?id=" + id;
    document.getElementById("read").href = "read.html?id=" + id;
    document.getElementById("sign-in").hidden = true;
    document.getElementById("sign-out").hidden = false;
  } else { // User is signed out!
    id = "";
    document.getElementById("profile").href = id;
    document.getElementById("sign-in").hidden = false;
    document.getElementById("sign-out").hidden = true;
  }
}

function removeFriend() {
  console.log("friends are: " + friends);
  var db = firebase.firestore();
  var peopleRef = db.collection("people");
  var friendId = window.location.href.split("=")[1];
  db.collection("people").doc(id).update({
    friends: firebase.firestore.FieldValue.arrayRemove(friendId)
  });
  console.log(friends)
  // peopleRef.get().then(function(doc) {
  //   console.log(doc);
  // })
  // var db = firebase.firestore();
  // db.collection("people").doc(id).update({
  //   bio: document.getElementById("bio").innerText,
  //   name: document.getElementById("name").innerText,
  // });

  // db.collection("people").doc(id).onSnapshot(function (doc) {
  //   friendIds = doc.data().friends.split(",");
  // });
  //
  // db.collection("people").doc(id).update({
  //       friends: friendsIds
  //     });

  // db.collection("people").doc(id).update({
  //   friends: ""
  // });

  document.getElementById("removeFriend").hidden = true;
  document.getElementById("addFriend").hidden = false;
  // console.log("removed");
}

function addFriend() {
  // document.getElementById("addFriend").classList = 'btn btn-success btn-sm';
  // document.getElementById("addFriend").innerText = "Added";
  var db = firebase.firestore();
  var friendId = window.location.href.split("=")[1];
  db.collection("people").doc(id).update({
    friends: firebase.firestore.FieldValue.arrayUnion(friendId)
  });

  document.getElementById("addFriend").hidden = true;
  document.getElementById("removeFriend").hidden = false;
  console.log("added");
}

// function getPurple() {
//   this.db = firebase.firestore();
//   var docRef = db.collection("people").doc(id);
//
//   docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
//   }).catch(function(error) {
//     console.log("Error getting document:", error);
//   });
// }

function editProfile() {
  numClickEdits += 1;
  document.getElementById("bio").setAttribute('contenteditable', 'true');
  document.getElementById("name").setAttribute('contenteditable', 'true');
  document.getElementById("filetag").hidden = false;
  document.getElementById("preview").hidden = false;
  document.getElementById("editMyProfile").setAttribute('class', "btn btn-success btn-sm");
  document.getElementById("editMyProfile").innerText = "Save Changes";

  if (numClickEdits > 1) {
    saveChanges();
  }
  // return firebase.database().ref().update(updates);
}

function saveChanges() {
  document.getElementById("bio").setAttribute('contenteditable', 'false');
  document.getElementById("name").setAttribute('contenteditable', 'false');
  document.getElementById("filetag").hidden = true;
  document.getElementById("filetag").hidden = true;
  document.getElementById("editMyProfile").setAttribute('class', "btn btn-secondary btn-sm");
  document.getElementById("editMyProfile").innerText = "Edit Profile";

  var db = firebase.firestore();
  db.collection("people").doc(id).update({
    bio: document.getElementById("bio").innerText,
    name: document.getElementById("name").innerText,
    pic: document.getElementById("prof_pic").src
  });

  numClickEdits = 0;
}

// function changeProfile(name) {
//
// }

document.addEventListener('DOMContentLoaded', function() {
    firebase.auth().onAuthStateChanged(authStateObserver);
    var vals = window.location.search.split("=");
    var db = firebase.firestore();
    db.collection("people").doc(vals[1]).onSnapshot(function (doc) {
      var friendIds = doc.data().friends;
      document.getElementById("name").innerText = doc.data().name;
      document.getElementById("bio").innerText = doc.data().bio;
      if (doc.data().pic != null || doc.data().pic != "") {
        document.getElementById("prof_pic").src = doc.data().pic;
      } else {
        document.getElementById("prof_pic").src = "img/profile_icon.jpeg";
      }
      friendIds.forEach(function(friend) {
        if (friend !== null) {
          db.collection("people").doc(friend).onSnapshot(function(doc) {
            document.getElementById("friends").innerHTML += "<a href=\"profile.html?id=" + doc.id + "\"/>" + doc.data().name + "</a><br>";
          });
        }
    });

    db.collection("people").doc(id).onSnapshot(function (docu) {
      var currUserFriendIds = docu.data().friends;

      var currHTML = window.location.href.split("=")[1];
      console.log(currHTML);
      console.log(currUserFriendIds);
      if (currHTML != id && currUserFriendIds.includes(currHTML)) { //not the user's profile and curr page is a friend
        document.getElementById("removeFriend").hidden = false;
        document.getElementById("addFriend").hidden = true;
        document.getElementById("editMyProfile").setAttribute('hidden', true);
        document.getElementById("name").innerText = doc.data().name;
        document.getElementById("bio").innerText = doc.data().bio;

        console.log("is friend");
      }else if(currHTML != id && !currUserFriendIds.includes(currHTML)){//not the user's profile and curr page is not friend
        document.getElementById("removeFriend").hidden = true;
        document.getElementById("addFriend").hidden = false;
        document.getElementById("editMyProfile").setAttribute('hidden', true);
        document.getElementById("name").innerText = doc.data().name;
        document.getElementById("bio").innerText = doc.data().bio;
        console.log("not friend");
      }else{//the user's profile
        document.getElementById("removeFriend").hidden = true;
        document.getElementById("addFriend").hidden = true;
        document.getElementById("editMyProfile").hidden = false;
        console.log("is curr user");
      }
    });
  });



    try {
        let app = firebase.app()
        let features = ['auth', 'database', 'messaging', 'storage'] .filter(feature => typeof app[feature] === 'function');
     } catch (e) {
         console.error(e);
     }
});

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //

  firebase.auth().onAuthStateChanged(authStateObserver);
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  var db = firebase.firestore();
  // db.collection("people").get().then(function(querySnapshot) {
  //   var s = "";
  //   querySnapshot.forEach(function(doc) {
  //     s += "<p>" + doc.data().name + "</p>";
  //   });
  //   document.getElementById("people").innerHTML = s;
  // });
  //
  // db.collection("posts").get().then(function(querySnapshot) {
  //   var s = "";
  //   querySnapshot.forEach(function(doc) {
  //     s += "<p>" + doc.data().name + ": " + doc.data().text + "</p>";
  //   });
  //   document.getElementById("posts").innerHTML = s;
  // });

  //This is the javascript that will allow you to update the profile template for the selected user.
  // var vals = window.location.search.split("=");
  // db.collection("people").doc(vals[1]).onSnapshot(function (doc) {
   // });


  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    // document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});

function readTextFile(file) {
  var allText;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
          if(rawFile.status === 200 || rawFile.status == 0) {
              allText = rawFile.responseText;
          }
      }
  }
  rawFile.send(null);
  return allText.split("\n");
}

fileTag.addEventListener("change", function() {
  changeImage(this);
});
