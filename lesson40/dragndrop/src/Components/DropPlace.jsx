import React from 'react';
import { DropTarget } from 'react-dnd';

const targetSpec = {
    drop(props, monitor, component){
        console.log('drop');
        return {
            text: props.text
        }
    }
}

function collect(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        itemType: monitor.getItemType(),
        item: monitor.getItem(),
        getDropResult: monitor.getDropResult(),
        didDrop: monitor.didDrop(),
    }
}

class DropPlace extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {id:1, title:'first element'},
            ]
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.item);
        // this.setState({
        //     list: [...this.state.list, nextProps.items]
        // });

        if (nextProps.isOver !== this.state.isOver) {
            this.setState({isOver: nextProps.isOver})
          }
      
          if (nextProps.didDrop && this.state.isOver) {
            if (!this.state.list.find(item => item.id === nextProps.item.id)) {
              this.setState({ list: [...this.state.list, nextProps.item] })
            }
          }
    }

    render(){
        console.log(this.props.list);
        return (
            <div className={'col-sm-6 border-left'}>
                {
                    this.props.connectDropTarget(
                        <ul>
                            {
                                this.state.list.map(e=>{
                                    return <li key={e.id} >{e.title}</li>
                                })
                            }
                        </ul>
                    )
                }
            </div>
        )
    }

}

export default DropTarget('Item', targetSpec, collect)(DropPlace);