import React from 'react';
import './AddItem.css';

function AddItem(){
    return (
        <div className="AddItem">
                <div><label><input type='text'/></label></div>
                <div> <button>Add</button></div>
        </div>
    );
}

export default AddItem;