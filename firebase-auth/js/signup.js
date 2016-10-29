"use strict";

var signUpForm = document.getElementById("signup-form");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var displayNameInput = document.getElementById("display-name-input");

signUpForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    //use Firebase to create a new user
    //with the email and password
    //after the account is created, then use
    //the .updateProfile() method to set the display name
    firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
		.then(user => {
	    	return user.updateProfile({
	    		displayName: displayNameInput.value
	    	});
	    }).then(() => {
	    	window.location = 'secure.html';
	    }).catch(error => {
	    	alert(error.message);
	    });

    return false;
});