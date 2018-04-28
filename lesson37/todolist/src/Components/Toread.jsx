import React from 'react';
import ToreadHeader from './ToreadHeader';
import ToreadList from './ToreadList';
import AddItem from './AddItem';
import './Toread.css';



class Toread extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            newItemTitle: '',
        }
    }

    handleAddNew=(text)=>{
        console.log('i am Toread ' + text);
        this.setState({newItemTitle: text});
    }

    render(){
        return (
            <div className="Toread">
                <ToreadHeader />
                <ToreadList newItem={this.state.newItemTitle} />
                <AddItem handleAddItem={this.handleAddNew} />
            </div>
        )
    }

}

export default Toread;