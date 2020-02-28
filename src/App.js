import React from 'react';
import './App.css';
import Cards from './Cards'
// import Card from './Card';

function indexAce() {
  return (Math.floor(Math.random()*3))
}

class App extends React.Component {
  constructor(props) {
    super(props)
    let cards = [{face:'king', up: false},{face:'king', up: false},{face:'king', up: false}]
    cards[indexAce()].face = "ace"
    this.state = {cards: cards}
  }

  flip(index){
    let cardsCopy = this.state.cards.slice()
    cardsCopy[index].up = !cardsCopy[index].up
    this.setState({cards: cardsCopy})
  } 

  render() {
  return (
    <div className="App">
    <Cards flip={(x) => this.flip(x)} cards={this.state.cards}/>
    </div>
  )};
}

export default App;
