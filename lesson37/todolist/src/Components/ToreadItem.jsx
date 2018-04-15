import React from 'react';
import './ToreadItem.css';

class ToreadItem extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {};
    }

    handleClick =()=>{
        this.props.onStatusChange(this.props.children.id)
    }

    render(){
        return (
            <li className="ToreadItem" onClick={this.handleClick}>
                <div>
                    <label>
                        <input type="checkbox" />
                    </label>
                </div>
                <div>
                    <p>{this.props.children.title}</p>
                </div>
                <div className="edit">
                    <a className="edit_button" title="edit"><i className="material-icons">edit</i></a>
                    <a className="delete_button"><i className="material-icons">delete</i></a>
                </div>
            </li>
        );
    }
}

export default ToreadItem;