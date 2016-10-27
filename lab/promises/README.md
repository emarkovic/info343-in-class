# promises-challenge

## Set up your dev environment
Follow [these](https://github.com/info343-a16/info343-in-class) instructions.

## What's a promise?

As you already know, when doing web programming you'll often make calls to a
foreign resource that takes some time load. If the browser just stopped and
waited until that thing loaded, the web would seriously be awful to use. So
instead, we program *asynchronously*, which allows us to continue doing other things while we wait for our programs to load.

What's a 'promise' in the world of JavaScript? It's a nicer way of dealing
with callbacks, and handling asychronous code based on a common specification.
The exact specification that all Promise implentations follow is known as
[A+](https://promisesaplus.com). Now that defines what all Promise
specifications have to follow, but many implementations add extra functions
that are very useful.

We'll be using native JavaScript promises. Take a look at their [API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Promise basics

Promises are great, because they're so easy to use!

```js
var p = new Promise(function (resolve, reject) {
	// so an async thing
	if (success) {
		resolve(result)
	} else {
		reject(Error('Something went wrong'));
	}
}); 

p.then(function (result) {
	//result!
})
.catch(function (error) {
	// errors go down to here
}
```

`p` is a new promise object, and it takes a
`function` with `resolve` and `reject` as parameters. `resolve` is used when everything in the async request worked as expected. `reject` is used when it didn't, so it usually gets an error object. This is a
consise way to specify behaviour asynchronously. Note that reject is optional, and you could instead just pass the resolve calback.

To envoke this promise we chain a `.then()` to it. `then` take a function as a parameter and that function gets the result of the request.

You can also chain a `.catch()` to it and it also take a function that receives an error as a parameter. If the async request got rejected by the promise, the error will skip the `then()` and go straight to the `catch()`.

## Multiple Promises

The above goes over how to deal with a single promise, but the really cool
part of them is that it's easy to specify complex behavior for groups of
actions by chaining promises together.

### Serial actions

Let's say you want do several things one by one. Like making 3 web requests, that all depend on each other.

```js
var req1 = function() {
  return fetch(something);
}

var req2 = function() {
  return fetch(somethingElse);
}

var req3 = function() {
  return fetch(yetAnotherThing);
}

req1()
  .then(req2)
  .then(req3)
  .then(function () {
	 console.log('everything is done');
  })
  .catch(function () {
  	 console.log('error in either req1, re2 or req3');
  });
```

What the above does is construct a promise that execute each request one by
one, and if any of them fail along the way, then our console will inform us
there was an error. The reason this works is because `req` object returns a
new promise object, which we can then call more promise methods on!

```js
var serialPromise = req1.then(req2).then(req3);
serialPromise
  .then(successFunction)
  .catch(failFunction);
```

In this case, we aren't doing anything that would actually require each request to be done one by one, but there are certainly situations where you will have things should happen one by one, and this is how you set it up.

### Parallel requests

So the above would actually be bad, because we're wasting the users time with each request. If the requests don't depend on each other, we should *perform them at the same time* and then do something one *all of them are finished*.
Promises make this incredibly simple of course!

```js

var parallelPromise = Promise.all([req1, req2, req3]);

parallelPromise.
  .then(function(values){
  	// values is an array of responses. It follows the order that the requests were set up in.
  })
  .catch(failureFunction);
```

Here we use Promise.all() function for doing paralell requests.
When takes an array of an arbitrary number of promises, and returns a promise. The promise
takes a callback function that then has values bound for each result of the
promises! What's cool is each request will occur at the same time, and we only start doing things once all of them are finished. *Often in web applications, your greatest bottleneck is the network, so efficiently utilizing the network will have huge perfomance impact*.

