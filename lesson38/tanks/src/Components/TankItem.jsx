import React from 'react';

function TankItem(props){
    console.log(props.dataItem);
    let item = props.dataItem;
    function handleClick(){
        props.handleTankSelect(item.model);
    }
        return (
            <div></div>
            // <div className="thumbnail" title="Click to details" key={item.model} onClick={handleClick}>
            //     <img src={item.preview} />
            //     <h3 className="title" title={item.model}>
            //         <img src={item.country_image} title={item.country}/>
            //         <span>{item.level}&nbsp;{item.model}</span>
            //     </h3>
            // </div>
        )
}

export default TankItem;