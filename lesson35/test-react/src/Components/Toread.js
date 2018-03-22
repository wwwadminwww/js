import React from 'react';
import ToreadHeader from './ToreadHeader';
import ToreadList from './ToreadList';

function Toread(props){
    return (
        <div className="Toread">
            <ToreadHeader />
            <ToreadList />
            <div>
                <input type="text" />
                <button>+</button>
            </div>
          </div>
    );
}

export default Toread;