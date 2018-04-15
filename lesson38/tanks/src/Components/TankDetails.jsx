import React from 'react';

function TankDetails(props){
    let { tank  } = props;
    
    return (
        <div class="tank-details">
        <div class="left-contet">
          <h1><img src={tank.country_image} title={tank.country} />{`${tank.model} (level ${tank.level})`}</h1>
          <h2>Preview</h2>
          <img src={tank.preview} /  >
          <p class="back-btn" onClick={props.handleBack} >Back to list view</p>
        </div>
        <div class="right-contet">
          <h3>Characteristics</h3>
          <table>
            <tr>
              <td>damage</td>
              <td>{tank.details.damage}</td>
            </tr>
            <tr>
              <td>breoning</td>
              <td>{tank.details.breoning}</td>
            </tr>
            <tr>
              <td>attack speed</td>
              <td>{tank.details.attack_speed}</td>
            </tr>
            <tr>
              <td>time of targeting</td>
              <td>{tank.details.time_of_targeting}</td>
            </tr>
            <tr>
              <td>ammunition</td>
              <td>{tank.details.ammunition}</td>
            </tr>
          </table>
        </div>
        </div>
    )
}

export default TankDetails;