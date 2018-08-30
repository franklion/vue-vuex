const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {


  // Create a root reference
  var storageRef = firebase.storage().ref();

  // Create a reference to 'mountains.jpg'
  var mountainsRef = storageRef.child('mountains.jpg');

  // Create a reference to 'images/mountains.jpg'
  var mountainImagesRef = storageRef.child('images/mountains.jpg');

  // While the file names are the same, the references point to different files
  mountainsRef.name === mountainImagesRef.name            // true
  mountainsRef.fullPath === mountainImagesRef.fullPath    // false

  
 response.send("Hello from Firebase!");
});
