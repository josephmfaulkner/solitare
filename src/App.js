import React, { Component } from 'react';

import './App.css';

import Console from './components/Console';
import {Deck, fullDeck} from './solitare/Deck';
import {NewGame} from './solitare/GameBoard';

class App extends Component {
  
  constructor(props){
    super(props);
    this.gameBoard = null; 
  }

  componentDidMount(){
    this.gameBoard = NewGame(new Deck(fullDeck())); 
    console.log(this.gameBoard.toJSON());
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Solitare</h1>
        <Console/>
      </div>
    );
  }
}

export default App;
