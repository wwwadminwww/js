import React from 'react';
import ToreadItem from './ToreadItem';
import './ToreadList.css';

class ToreadList extends React.Component 
{
    constructor (props){
        super(props);
        this.state = {
            list:[
                {id:1, title: 'First task', completed: false, active: false},
                {id:2, title: 'Second task', completed: false, active: false},
                {id:3, title: 'Third task', completed: true, active: false},
                {id:4, title: 'Fourth task', completed: false, active: false},
            ]
        }
    }

    handleItemStatusChange = (id) => {
        const prevElement = this.state.list.find(
            function(e){
                return e.id === id;
            }
        );

        // const newState = this.state.list.map(
        //     function(e){
        //         if (e.id === id){
        //             return {...e.completed}
        //         }
        //     }
        // );
        console.log(prevElement);
    }

    render (){
        return (
            <ul className="ToreadList">
                {
                    this.state.list.map(e => {
                        return <ToreadItem completed={e.completed} onStatusChange={this.handleItemStatusChange}>{e}</ToreadItem>
                    })
                }
            </ul>
        );
    }
}

export default ToreadList;