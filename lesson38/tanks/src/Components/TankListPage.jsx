import React from 'react';
import TankItem from './TankItem';

function TankListPage(props){
    console.log(props.items);
    return (
        <div className="thumbnails">
            <h1>Most popular tanks</h1>
            {
                props.items.map(item => {
                    function handleClick(){
                        props.handleTankSelect(item.model);
                    }
                    return (
                        // <TankItem dataItem={item} />
                        <div className="thumbnail" title="Click to details" key={item.model} onClick={handleClick}>
                            <img src={item.preview} />
                            <h3 className="title" title={item.model}>
                                <img src={item.country_image} title={item.country}/>
                                <span>{item.level}&nbsp;{item.model}</span>
                            </h3>
                        </div>
                    )
                })
            }
        </div>
      );
}

export default TankListPage;