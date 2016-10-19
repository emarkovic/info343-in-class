"use strict";

var boxOne = document.getElementById('one'),
	boxTwo = document.getElementById('two'),
	boxThree = document.getElementById('three'),
	boxFour = document.getElementById('four'),
	boxFive = document.getElementById('five'),
	boxSix = document.getElementById('six');

boxOne.addEventListener('click', function (evt) {
	this.classList.add('fade-to-black');
	this.classList.remove('grey');
	this.classList.add('black');
	console.log(this.classList)
});

boxTwo.addEventListener('click', function (evt) {
	this.classList.add('fall');	
});

boxThree.addEventListener('mouseover', function(event) {
	this.classList.add('fade-to-white');
	this.classList.add('white');
});

boxThree.addEventListener('mouseout', function(event) {
	this.classList.add('fade-to-bg-color');
	this.classList.remove('white');
	this.classList.add('grey');
});

boxFour.addEventListener('click', function (evt) {
	if (this.classList.contains('click')) {
		this.classList.remove('fall');
		this.classList.add('float');
		this.classList.remove('click');		
	} else {
		this.classList.remove('float');
		this.classList.add('fall');
		this.classList.add('click');
	}	
});

var intervalId;
boxFive.addEventListener('click', function (evt) {
	var boxDims = this.getBoundingClientRect()
	var width = boxDims.width;
	var height = boxDims.height;
	var top = boxDims.top;
	var left = boxDims.left;
	var step = 2;

	intervalId = setInterval(function () {
		top -= step / 2;
		left -= step / 2;
		width += step;
		height += step;

		if (width > 500 && height > 500) {
			this.style.display = 'none';
			clearInterval(intervalId);
		}

		this.style.width = width + 'px';
		this.style.height = height + 'px';
		this.style.top = top + 'px';
		this.style.left = left + 'px';

	}.bind(this), 1);
});
