import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increment = () => {
    const currentCounter = this.state.counter;

    this.setState({
      counter: currentCounter + 1
    });
  }

  decrement = () => {
    const currentCounter = this.state.counter;

    this.setState({
      counter: currentCounter - 1
    });
  }

  render = () => {
    return (
      <div>
        <h2>Compteur avec composant sous forme de classe :</h2>
        <p>Compteur : {this.state.counter}</p>
        <p>
          <input type="button" onClick={this.increment} value="Incrémenter" style={{marginRight: '1em'}}/>
          <input type="button" onClick={this.decrement} value="Décrémenter"/>
        </p>
      </div>
    )
  }
}

export default ClassCounter;