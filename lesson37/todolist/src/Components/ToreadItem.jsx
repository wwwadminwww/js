import React from 'react';
import ItemInput from './ItemInput';
import './ToreadItem.css';

class ToreadItem extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
        };
    }

    handleClick =()=>{
        this.props.onStatusChange(this.props.children.id)
    }

    handleDelete =()=>{
        this.props.handleDelete(this.props.children.id);
    }

    handleEdit =()=>{
        this.setState({
            isEdit:true,
        });
    }

    handleSave =()=>{
        this.setState({
            isEdit:false,
        });
    }

    render(){
        return (
            <li className={`ToreadItem ${this.props.completed ? ' active' : ''}`}  >
                <div>
                    <label>
                        <input type="checkbox" onChange={this.handleClick} />
                    </label>
                </div>
                <div>
                    <p>{this.props.children.title}</p>
                </div>
                <div className="edit">
                    {
                        this.state.isEdit 
                        ? <p><ItemInput itemId={this.props.children.id} handleSave={this.props.handleItemSave} value={this.props.children.title} /><i onClick={this.handleSave} className="material-icons">edit</i></p>
                        : <a className="edit_button" title="edit" ><i onClick={this.handleEdit} className="material-icons">edit</i></a>
                    }
                    <a className="delete_button" onClick={this.handleDelete} ><i className="material-icons">delete</i></a>
                </div>
            </li>
        );
    }
}

export default ToreadItem;