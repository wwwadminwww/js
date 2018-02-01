'use strict';

function Modal (modal){
	this.view = modal;
	this.show = function(){
		this.view.classList.remove('hide');
	};
	this.hide = function(){
		this.view.classList.add('hide');
	}
}

var aModal1 = new Modal(document.getElementById(myModal));

console.log(aModal1);