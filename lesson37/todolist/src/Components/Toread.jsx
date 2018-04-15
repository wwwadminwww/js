import React from 'react';
import ToreadHeader from './ToreadHeader';
import ToreadList from './ToreadList';
import AddItem from './AddItem';
import './Toread.css';

function Toread(){
    return (
        <div className="Toread">
            <ToreadHeader />
            <ToreadList />
            <AddItem />
        </div>
    )
}

export default Toread;