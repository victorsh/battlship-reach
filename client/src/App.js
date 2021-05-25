import React from 'react'
import battleship from './assets/battleship.png'
import gameDescription from './assets/game-description.json'

class App extends React.Component {
  items() {
    const hold = []
    for (let i = 0; i < 10; i++) {
      hold.push(<div key={i}>[]</div>)
    }

    return <div>{hold}</div>
  }

  render() {
    return (
      <div>
        <h2>Battleship Algo</h2>
        <h3>Date : {new Date().toDateString()}</h3>
        <img src={battleship} />
        <div>{gameDescription.description}</div>
        {this.items()}
      </div>
    )
  }
}

export default App
