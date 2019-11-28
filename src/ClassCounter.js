import React, { Component } from 'react';

class ClassCounter extends Component {
  // Constructeur de la classe
  // C'est ici que j'initialise mon state
  // Si je n'ai pas de state dans mon composant
  // Alors c'est inutile de réécrire mon constructeur
  // Car j'hérite du constructeur parent
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  // Ajoute 1 à la variable d'état "counter"
  // On passe par une constante "currentCounter"
  // et on utilise la méthode setState pour garantir l'immutabilité du state
  // setState, quand elle est exécutée, déclenche l'exécution de la méthode render
  // Donc on peut bien avoir plusieurs renders lors du cycle de vie d'un composant
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