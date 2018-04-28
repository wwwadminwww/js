import React from 'react';
import DropPlace from './DropPlace';
import List from './List';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function Dnd(){
    return (
        <div className={'row border'}>
            <div className={'col-sm-6'}>
                <List />
            </div>
            <DropPlace />
        </div>
    )
}

export default DragDropContext(HTML5Backend)(Dnd);