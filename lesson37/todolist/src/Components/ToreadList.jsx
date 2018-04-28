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
            ],
        }
    }

    handleItemStatusChange = (id) => {
        const prevElement = this.state.list.find(
            function(e){
                return e.id === id;
            }
        );

        const newState = this.state.list.map(item => {
            if (item.id === id){
                item.completed = !item.completed;
                return item;
            }else{
                return item;
            }
        });

        this.setState({list:newState});
        console.log(prevElement);
    }

    handleItemDelete=(id)=>{
        // console.log(id);
        const newState = this.state.list.filter(
            el => { return el.id !== id; }
        );
        this.setState({list:newState});
    }

    handleItemSave=(id, text)=>{
        this.state.list.map(e=>{
            if (e.id === id){
                e.title = text;
            }
            return e;
        });
    }

    handleItemAdd=()=>{
        if (this.props.newItem){
            let newList = this.state.list.push({id:5, title:this.props.newItem, completed:false, active:false});
            this.setState({
                list: newList,
            });
            console.log('working ' + this.state.list);
        }else{
            console.log('not working ' + this.state.list);
        }
    }

    render (){
        console.log('working ' + this.props.newItem);
        return (
            <ul className="ToreadList"  >
                {
                    this.state.list.map(e => {
                        return <ToreadItem completed={e.completed} onStatusChange={this.handleItemStatusChange} handleDelete={this.handleItemDelete} handleItemSave={this.handleItemSave}>{e}</ToreadItem>
                    })
                }
            </ul>
        );
    }
}

export default ToreadList;