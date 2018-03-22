import React from 'react';

function ToreadItem(props){
    return (
        <li className={`ToreadItem${props.completed ? ' completed' : ''}`}>{props.children.title}</li>
    );
}

export default ToreadItem;