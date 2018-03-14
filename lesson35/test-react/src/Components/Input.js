import React from 'react';

class Input extends React.Component
{
    constructor (){
        super();
        this.state = {
            value: 0,
        };

    }

    handleClick = () => {
        this.setState({value: this.state.value + 1});
    }

    render(){
        return <div><p onClick={this.handleClick}>{this.state.value}</p></div>;
    }
}  

export default Input;
