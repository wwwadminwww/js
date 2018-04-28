import React from 'react';
import { DragSource } from 'react-dnd';

const spec={
    beginDrag(props, monitor){
        return {
            id: props.children.id,
            text: props.children.title,
            status: false,
        }
    }
}

function collect(connect, monitor){
    return{
        dragSource: connect.dragSource()
    }
}

function Item(props){
    return props.dragSource(
        <li>{props.children.title}</li>
    )
}

export default DragSource('Item', spec, collect)(Item);