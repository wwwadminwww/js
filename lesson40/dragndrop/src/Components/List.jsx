import React from 'react';
import Item from './Item';

class List extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {id:1, title:'Red'},
                {id:2, title:'Green'},
                {id:3, title:'Yellow'},
                {id:4, title:'Blue'},
                {id:5, title:'Fuck Off'},
            ]
        }

    }

    render(){
        return (
            <ul>
                {
                    this.state.list.map(e=>{
                        return <Item>{e}</Item>
                    })
                }
            </ul>
        )
    }
}

export default List;