import React from 'react';
import './style/App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { page: 'home' }
  }

  onButtonClick = (e) => {
    e.preventDefault();
    console.log(e.target.textContent.toLowerCase())
    this.setState({ ...this.state, page: e.target.textContent.toLowerCase()})
  }

  grid = () => {
    const grid_space = <div>G</div>
    const entries = []
    for (let i = 0; i < 32; i++) {
      entries.push(grid_space)
    }
    return (
      <div>
        {grid_space}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.state.page === 'home' ? 
          <>
            <button onClick={this.onButtonClick}>Deployer</button>
            <button onClick={this.onButtonClick}>Attacher</button>
          </>
          : grid()
        }
      </div>
    );
  }
}

export default App;
