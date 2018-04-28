'use strict';
console.log('hello');

var tabs = document.getElementById('tabs');
var content = document.getElementById('wrapper');
Array.prototype.forEach.call(tabs.children, function(element, index){
	element.addEventListener('click', function(event){
		document.querySelector('#tabs .active').classList.remove('active');
		event.currentTarget.classList.add('active');
		content.querySelector('.active').classList.remove('active');
		content.children[index].classList.add('active');
	});
	console.log(element);
});