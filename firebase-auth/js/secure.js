"use strict";

var currentUser;

//ask Firebase to call our function whenever the
//authentication state changes; this is how we get 
//the current user
firebase.auth().onAuthStateChanged(function(user) {
    //`user` will be null or a Firebase User object
    if (user) {
        currentUser = user;
        
        //set the <span id="user-name"> text content
        //to be the user's .displayName

    } else {
        //if the user isn't signed in,
        //navigate the browser back to index.html
        window.location = "index.html";
    }
});

document.getElementById("sign-out-button").addEventListener("click", function() {
    //tell Firebase to sign the current user out...

});
