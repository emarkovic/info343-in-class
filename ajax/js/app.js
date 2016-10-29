"use strict";

//base URL for the Spotfiy api
//see https://developer.spotify.com/web-api/search-item/
//The ? separates the URL path from the "query string"
//A query string is a set of name/value pairs. They are
//commonly used in APIs to specify parameters.
//We are passing two parameters here: type=track (search only for tracks)
//and q=... (string to search for, which we will get from the user)
var baseURL = "https://api.spotify.com/v1/search?type=track&q=";

var queryResults = document.querySelector('.query-results');
var searchForm = document.querySelector('.search-form');
// each dom node has a querySelector function on it so you can just search within that element
var searchInput = searchForm.querySelector('input');
var searchButton = searchForm.querySelector('button');
var spinner = document.querySelector('header mdl-spinner');
var debug = true;
var previewAudio = new Audio();

function log(s) {
	if (debug) console.log(s);
}

function renderTrack(track) {
	var img = document.createElement('img');
	img.alt = track.name;
	img.src = track.album.images[0].url;
	//u can put this anywhere and contents will show up when you hover (for like a sec) over the element
	img.title = img.alt;
	doAnimation(img, 'bounceIn');
	img.addEventListener('click', function () {
		if (previewAudio.src !== track.preview_url) {
			//stop current, reset, start playing new
			previewAudio.pause();
			previewAudio = new Audio(track.preview_url);
			previewAudio.play();
		} else {			
			if (previewAudio.paused) {
				reviewAudio.play();
			} else {
				previewAudio.pause();
			}
		}
		doAnimation(img, 'pulse');
	});

	queryResults.appendChild(img);
}

function doAnimation(elem, aniName) {
	elem.classList.add('animated', aniName);
	elem.addEventListener('animationend', function () {
		elem.classList.remove(aniName);
	})
}

function render(data) {
	log(data);
	queryResults.innerHTML = '';

	if (data.error || 0 == data.tracks.items.length) {
		renderError(data.error || new Error('No results found'));
	} else {
		//we care about the items array
		data.tracks.items.forEach(renderTrack);
	}	
}

function renderError(err) {
	log(err);
	var message = document.createElement('p');
	message.textContent = err.message;
	message.classList.add('error-message');
	queryResults.appendChild(message);
}

searchForm.addEventListener('submit', (evt) => {	
	// prevents default form behavior
	evt.preventDefault();

	var query = searchInput.value.trim();
	if (query.length <= 0) {
		return false;
	} 
	fetch(baseURL + query)
		.then(function (response) {
			return response.json();
		})
		.then(render)
		.catch(renderError);

	// prevents default form behavior for older browsers
	return false;
});




