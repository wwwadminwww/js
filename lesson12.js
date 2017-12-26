'use strict';
var down = document.getElementById('down'),
	up = document.getElementById('up'),
	left = document.getElementById('left'),
	right = document.getElementById('right'),
	active = document.querySelector('.active'),
	childrenList = document.getElementById('list'),
	root = document.getElementById('tree');

var path = {
	up : null,
	down : null,
	left : null,
	right : null,
}

function setDisable(){
	if (!active.parentElement || (active.parentElement === root.parentElement)){
		path.up = false;
		up.setAttribute('disabled', '');
	}else{
		path.up = true;
		up.removeAttribute('disabled');
	}
	if (!active.children || !active.children.length){
		path.down = false;
		down.setAttribute('disabled', '');
	}else{
		path.down = true;
		down.removeAttribute('disabled');
	}
	if (!active.previousElementSibling || (active.parentElement === root.parentElement)){
		path.left = false;
		left.setAttribute('disabled', '');
	}else{
		path.left = true;
		left.removeAttribute('disabled');
	}
	if (!active.nextElementSibling || active.parentElement === root.parentElement){
		path.right = false;
		right.setAttribute('disabled', '');
	}else{
		path.right = true;
		right.removeAttribute('disabled');
	}
}
setDisable();

function clearChildrenList(){
	childrenList.innerHTML = '';
}
console.log(up);
console.log(right);
console.log(left);
console.log(down);
console.log(active);

up.addEventListener('click', function() {
	console.log('up');
	clearChildrenList();
		active.classList.remove('active');
		active.parentElement.classList.add('active');
		active = active.parentElement;
	setDisable();
});
left.addEventListener('click', function(){
	console.log('right');
	clearChildrenList();
		active.classList.remove('active');
		active.previousElementSibling.classList.add('active');
		active = active.previousElementSibling;
		setDisable();
});
right.addEventListener('click', function(){
	console.log('left');
	clearChildrenList();
		active.classList.remove('active');
		active.nextElementSibling.classList.add('active');
		active = active.nextElementSibling;
	setDisable();
});
down.addEventListener('click', function(){
	var items = Array.prototype.map.call(active.children, e => e);
	var df = document.createDocumentFragment();
	items.forEach((e, i)=> {
		var item = document.createElement('li');
		item.innerHTML = e.tagName;
		item.addEventListener('click', function(){
			active.classList.remove('active');
			e.classList.add('active');
			active = e;
			setDisable();
			clearChildrenList();
		});
		df.appendChild(item);
		console.log(item);
	});
	console.log(items);
	console.log('down');
	childrenList.appendChild(df);
});

document.addEventListener('keydown', function(event){
	console.log(event.key);
	if (event.key === 'ArrowUp' || event.keyCode === 87 && path.up) {
		console.log('up');
		clearChildrenList();
		active.classList.remove('active');
		active.parentElement.classList.add('active');
		active = active.parentElement;
		setDisable();
	}
	if (event.key === 'ArrowDown' || event.keyCode === 83 && path.down){
		var items = Array.prototype.map.call(active.children, e => e);
		var df = document.createDocumentFragment();
		items.forEach((e, i)=> {
		var item = document.createElement('li');
		item.innerHTML = e.tagName;
		item.addEventListener('click', function(){
			active.classList.remove('active');
			e.classList.add('active');
			active = e;
			setDisable();
			clearChildrenList();
		});
		df.appendChild(item);
		console.log(item);
	});
	console.log(items);
	console.log('down');
	childrenList.appendChild(df);
	}
	if (event.key === 'ArrowLeft' || event.keyCode === 65 && path.left){
		console.log('left');
		clearChildrenList();
		active.classList.remove('active');
		active.previousElementSibling.classList.add('active');
		active = active.previousElementSibling;
		setDisable();
	}
	if (event.key === 'ArrowRight' || event.keyCode === 68 && path.right){
		console.log('right');
		clearChildrenList();
		active.classList.remove('active');
		active.nextElementSibling.classList.add('active');
		active = active.nextElementSibling;
		setDisable();
	}
});