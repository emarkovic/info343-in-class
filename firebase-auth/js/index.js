"use strict";

var signUpForm = document.getElementById("signin-form");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");

signUpForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    	.then(() => {
    		window.location = "secure.html"
    	}).catch((error) => {
    		alert(error.message)
    	});



    return false;
});