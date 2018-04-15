import React, { Component } from 'react';
import TankListPage from './Components/TankListPage';
import Tanks from './API/tanks';
import TankDetails from './Components/TankDetails';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tankId: null,
    }
  }

  handleTankSelect = (model) => {
    this.setState({tankId: model})
  }

  handleBack = () => {
    this.setState({ tankId: null })
  }

  render() {
    return (
      <div className="App">
       { 
          this.state.tankId 
          ? <TankDetails handleBack={this.handleBack} tank={Tanks.find( tank => this.state.tankId === tank.model )} />
          : <TankListPage handleTankSelect={this.handleTankSelect} items={Tanks} />
       }
       {/* <TankDetails tank={Tanks[2]} /> */}
      </div>
    );
  }
}

export default App;
