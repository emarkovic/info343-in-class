//put interpreter into strict mode
"use strict";

function formatNum(num) {
	return numeral(num).format('0,0');
}

function compareSex(sex) {
	return function (record) {
		return sex == record.sex;
	}
}

function compareByCount(rec1, rec2) {
	return rec1.count - rec2.count;
}

function descending(comparitor) {
	return function (rec1, rec2) {
		return -comparitor(rec1, rec2);
	}
}

var females = BABYNAMES.filter(compareSex('F'));
var males = BABYNAMES.filter(compareSex('M'));
var tbody = document.querySelector('tbody');
females.sort(descending(compareByCount));

function renderLine(tr, content) {
	return function (record) {
		var td = document.createElement('td');
		td.textContent = record[content];
		tr.appendChild(td);
	}
}


function render(records) {
	tbody.innerHTML = '';
	records.forEach(function (record) {		
		var tr = document.createElement('tr');
		tr.classList.add('sex-' + record.sex.toLowerCase());

		var td = document.createElement('td');
		td.textContent = record.name;
		tr.appendChild(td);

		td = document.createElement("td");
		td.textContent = record.sex;
		tr.appendChild(td);

		td = document.createElement("td");
		td.textContent = record.count;
		tr.appendChild(td);

		tbody.appendChild(tr);
	});
}

render(BABYNAMES);
// render(females.slice(0, 99));

var searchInput = document.getElementById('name-search-input');

searchInput.addEventListener('input', function(evt) {
	var query = this.value.toLowerCase();
	if (query.length < 2) {
		render(BABYNAMES);
		return;
	}
	var matches = BABYNAMES.filter(function (record) {
		return record.name.toLowerCase().indexOf(query) > 0;
	});
	render(matches);
});

var countColHeading = document.getElementById('count-col-header');
countColHeading.addEventListener('click', function (evt) {
	BABYNAMES.sort(descending(compareByCount));
	render(BABYNAMES)
});