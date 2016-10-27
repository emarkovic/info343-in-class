  /*
  In this challenge, you'll learn how to use promises to make independent requests as well as how to make dependendent requests

  Part 1: Return what the current weather is based on a user's location (you can't use the location API though)

  - When you click the Weather button, the current weather should be shown in the #weather-results section
  - Use http://www.ip-api.com/json/ to get a user's location. This uses your IP address to get an estimate of your location
  - With the result of that request, make another request to determine the current weather
    - Use http://openweathermap.org/current
    - The API is really straightforward, but you'll have to pass an additional parameter to getJSON in order to get it working!
      - Take a look at jQuery's getJSON() API to see what that extra parameter is! http://api.jquery.com/jquery.getjson/
  */
 
function parse(response) {
	return response.json();
}

function fetchWeather(response) {
	var lat = response.latitude;
	var lon = response.longitude;	
	var url2 = url + 'lat=' + lat + '&lon=' + lon + '&' + apiKey;
	return fetch(url2).then(parse);
}

function toF(temp) {
	return (temp * 9 / 5) - 459.67;
}

function render(results) {
	var h3 = document.createElement('h3');
	h3.textContent = results.name + ' weather:';
	weatherResults.appendChild(h3);

	var p = document.createElement('p');
	p.textContent = toF(results.main.temp) + ' degrees Fahrenheit, ' + results.weather[0].description;
	weatherResults.appendChild(p);
}

const apiKey = "APPID=c2072f8cb6d9c7971cff7c662c5940c6";
// api.openweathermap.org/data/2.5/weather?lat={LAT}&lon={LONG}&APPID={KEY}
var url = 'http://api.openweathermap.org/data/2.5/weather?';
var weatherBtn = document.getElementById('fetch-weather');
var weatherResults = document.getElementById('weather-results');
 
var result = fetch('https://freegeoip.net/json/')
 	.then(parse)
 	.then(fetchWeather); 	

weatherBtn.addEventListener('click', function () {
	result.then(render)
});

 /*
  Part 2: Show the difference between parallel and serial promises

  - Below I've implemented a couple of promises that just use timeouts, and return numbers
  - When the user clicks the serial button: each of the promises will execute one by one, and you will return the result in #slow-result
  - When the user clicks the parallel button: each of the promises will execute at the same time, and you will return the result in #fast-result
  - This is to show the immense importance of network optimization!
*/

var parallelButton = document.getElementById('parallel-promise');
var serialButton = document.getElementById('serial-promise');
var fastResult = document.getElementById('fast-result');
var slowResult = document.getElementById('slow-result');

serialButton.addEventListener('click', function () {
	quick().then(function (result) {
		slowResult.textContent += result + ' ';
	});
	medium().then(function (result) {
		slowResult.textContent += result + ' ';
	});
	slow().then(function (result) {
		slowResult.textContent += result + ' ';
	});
});

parallelButton.addEventListener('click', function () {
	Promise.all([quick(), medium(), slow()])
		.then(values => {
			values.forEach(value => {
				fastResult.textContent += value + ' ';
			});
		});
});

/*
  Part 3: Modify the promise factory to create promises that can FAIL
  
  - The promise factory currently only returns promises that resolve
  - Use the deferred.fail() method to instead make it fail (https://api.jquery.com/deferred.fail/)
  - Now update you're code to handle dealing with these errors!
  - Congrats, you can now model asynchronous events entirely in your code :)
*/

// This is for parts 2 and 3. 
// Creates a promise that will take delay ms before resolving with the given value
// Don't worry about how this works, but if you want you're curious feel free to ask
function promiseFactory(delay, value) {
	return function () {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve(value);
			}, delay);
		});
	}
}


var quick = promiseFactory(500, 5);
var medium = promiseFactory(1000, 2);
var slow = promiseFactory(2000, 30)

