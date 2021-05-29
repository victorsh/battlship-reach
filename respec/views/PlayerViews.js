import React from 'react';
import Grid from '../components/Grid'

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetShips = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedShips: new Array(16).fill(0)}
  }

  selectShips = (index) => {
    const arr = this.state.selectedShips
    arr[index] = arr[index] === 1 ? 0 : 1;
    this.setState({selectedShips: arr})
    console.log(this.state.selectedShips)
  }

  render() {
    const {parent, playable} = this.props;
    return (
      <div>
        {!playable ? 'Please wait...' : ''}
        <br />

        <Grid selectShips={}/>

        <button
          disabled={!playable}
          onClick={() => parent.playShips(this.state.selectedShips)}
        >Submit</button>
      </div>
    );
  }
}

exports.GetShips = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedShips: new Array(16).fill(0)}
  }

  selectShips = (index) => {
    const arr = this.state.selectedShips
    arr[index] = arr[index] === 1 ? 0 : 1;
    this.setState({selectedShips: arr})
    console.log(this.state.selectedShips)
  }

  render() {
    const {parent, playable, ships} = this.props;
    return (
      <div>
        {ships ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />

        <Grid selectShips={}/>

        <button
          disabled={!playable}
          onClick={() => parent.playSelectedShips(this.state.selectedShips)}
        >Submit</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
