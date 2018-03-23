import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component
{
    constructor(props){
        super(props);
        // console.log('jdbfbdjbfj');
        this.state = {
            checked: false
        }
    }

    componentWillMount(){
        console.log('willMount');
        console.time();
    }

    componentDidMount(){
        console.log('didMount');
        console.timeEnd();
    }

    handleClick = () => {
        this.setState( {checked: !this.state.checked} );
        // console.log(this.state);
        // this.state.checked = !this.state.checked;
        // console.log(this.state);
    }

    render(){
        return (
            <p className={ `checkbox${this.state.checked ? ' active' : ''}`} onClick={ this.handleClick }>
                {
                    console.log('component')
                }
            </p>
        );
    }

}

export default Checkbox;