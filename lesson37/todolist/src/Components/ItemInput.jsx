import React from 'react';

class ItemInput extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            text: this.props.value,
        };
    }

    handleChange=(e)=>{
        this.props.handleSave(this.props.itemId, e.target.value);
        this.setState({
            text: e.target.value,
        });
        // console.log(this.state);
    }

    render(){
        return (
            <input type="text" value={this.state.text} onChange={this.handleChange} />
        )
    }

}

export default ItemInput;