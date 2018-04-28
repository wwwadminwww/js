import React from 'react';
import './AddItem.css';

class AddItem extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }

    handleItemChange=(e)=>{
        this.setState({
            text: e.target.value,
        });
    }

    handleAddItem=()=>{
        this.props.handleAddItem(this.state.text);
    }

    render(){
        return (
            <div className="AddItem">
                    <div><label><input type="text" value={this.state.text} onChange={this.handleItemChange} /></label></div>
                    <div> <button onClick={this.handleAddItem} >Add</button></div>
            </div>
        );
    }

}

export default AddItem;