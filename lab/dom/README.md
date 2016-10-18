#Transitions, Animations, DOM, and JS

Hello smart, amazing, and wonderful web developers! In this lab we will be practicing JavaScript events and DOM manipulation.

If you are unfamiliar with CSS transitions, take a few minutes to look over [this page](http://www.w3schools.com/css/css3_transitions.asp).

If you are unfamiliar with CSS animations, take a few minutes to look over [this page](http://www.w3schools.com/css/css3_animations.asp).

**Note: looking at those ^ websites is worth the time investment. Building your understanding will reduce roadblocks later.**

Alright lets get started.

##Setting up your environment

Follow [these steps](https://github.com/info343-a16/info343-in-class) to set up your development environment.

##Overview of starter files##
I have made an index.html, css/main.css, and js/main.js for you already. The CSS and JS are already linked within the HTML.

###index.html###
This file contains 6 divs that will be our boxes. We will target these boxes in the JS to make them do interesting things. 

You will notice that each box has 1 or 2 classes on it and it also has an ID. This ID corresponds to the number of the box.

**You do not have to modify this file.**

###css/main.css##
This file contains general styling rules for the boxes. 

Towards the bottom of the file I have included animation and transition classes.

You do not have to modify any of the classes in there, but you might have to add some of your own depending on how far you get in the lab exercise.

###js/main.js
This is where your work begins.

Each box will do a different thing depending on if you click or hover over it. 
Don't worry about doing all of these things, just do as many as you can.

**Hint:** Use [element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and existing CSS classes in css/main.css

1. Box 1
	* On click, this box's background color should fade to black.
	![](https://thumbs.gfycat.com/WarmTatteredEastrussiancoursinghounds-size_restricted.gif)
2. Box 2 
	* On click, this box should fall 500px from it's initial poisiton and then it should remain there.
	![](https://thumbs.gfycat.com/AptBeneficialJapanesebeetle-size_restricted.gif)
3. Box 3 
	* On mouse over, this box's background color should fade to white and then remain white while your cursor is on the box.
	* On mouse out, the background color should fade back to the original background color (grey) and remain that way.
	![](https://thumbs.gfycat.com/MeaslyBlackAmericanbobtail-size_restricted.gif)
4. Box 4 
	* For this box, we want similar functionality as Box 2 but we want to toggle the fall and float of the box. This means that when you click the box it will fall and then when you click it again in its fallen position, it will float back up to the top of the page. This is toggling between two states.
	![](https://thumbs.gfycat.com/UnimportantMisguidedAmericancrayfish-size_restricted.gif)
5. Box 5 
	* We want to make this box 'explode' on click. This is achieved by using [setInterval()](http://www.w3schools.com/jsref/met_win_setinterval.asp). 
	* This is meant to be in pure JS, adding classes is not necessary.
	![](https://thumbs.gfycat.com/ShallowKnobbyDinosaur-size_restricted.gif)
6. Box 6
	* Make you own animation/transition/other sort of DOM manipulation!
