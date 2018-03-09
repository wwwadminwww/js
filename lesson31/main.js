'use strict';
var addProductButton = document.getElementById('addProd');
var closeButton = document.getElementById('close');
var productForm = document.getElementById('productForm');
var form = document.getElementById('form');
var table = document.getElementById('text');
var request = new XMLHttpRequest;
var data = null;
request.open('GET', 'http://localhost:3000/products/', true);
request.send();

request.addEventListener('load', function(){
    if (this.status == 200){
        data = JSON.parse(this.response);
        renderList(data.products);
    }
    
});

window.onload = function(){
    
};

function renderList(data){
    let container = document.createDocumentFragment();
    // res.appendChild(document.createElement('th').innerHTML = 'Name:');
    data.forEach(element => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');
        tdName.innerHTML = element.name;
        tdPrice.innerHTML = element.price;
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        container.appendChild(tr);
    });
    table.appendChild(container);
    console.log(table);
}

addProductButton.addEventListener('click', function(){
    form.classList.add('active');
});
closeButton.addEventListener('click', function(){
    form.classList.remove('active');
});

productForm.addEventListener('submit', e => {
    e.preventDefault();
    let inputs = e.target.querySelectorAll('[name]');
    let data = {};
    for (let i=0; i < inputs.length; i++){
        data[inputs[i].name] = inputs[i].value; 
    }
    data = JSON.stringify(data);
    console.log(data);
    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/products/', true);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.addEventListener('load', function(){
        console.log(this.status);
    });
    request.send(data);


    console.log(inputs);

});

