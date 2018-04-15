'use strict';
console.log('lesson34');

function createElement(tag, attr, children){
    let element = document.createElement(tag);
    for (let key in attr){
        element.setAttribute(key, attr[key]);
    }
    if (!children) return element;
    if (typeof children === 'string' ){
        element.innerHTML = children;
        return element;
    }
    if (Array.isArray(children)){
        children.forEach(e => (typeof e === 'string') ? element.appendChild(document.createTextNode(e)) : element.appendChild(e));
        return element;
    }

}

console.log(createElement('div',{'kkk':'tttt','class':'col-md-5'}));

React.createElement();