import React from 'react';
import * as reach from '@reach-sh/stdlib/ALGO';
import * as backend from './backend/index.main.mjs';
import './App.css';

import Grid from './components/Grid'

const { standardUnit } = reach;
const intToOutcome = ['Attacher wins!', 'Draw!', 'Deployer wins!'];
const GRID_SIZE = 9;
const SHIPS = new Array(16).fill(0);
const SHIPS2 = new Array(16).fill(0);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultFundAmount: '10',
      defaultWager: '3',
      standardUnit,
      selectedShips: SHIPS,
      guessedShips: SHIPS
    }
  }

  async componentDidMount() {
    // const account = await reach.getDefaultAccount();
    // const balanceAtomic = await reach.balanceOf(account);
    // const balance = reach.formatCurrency(balanceAtomic, 4);
    // this.setState({ account, balance })
    // try {
    //   const faucet = await reach.getFaucet();
    // } catch (e) {
    //   //
    // }
  }

  guessShips = (index) => {
    const arr = this.state.guessedShips
    arr[index] = arr[index] === 1 ? 0 : 1;
    this.setState({guessedShips: arr})
    console.log(this.state.guessedShips)
  }

  selectShips = (index) => {
    const arr = this.state.selectedShips
    arr[index] = arr[index] === 1 ? 0 : 1;
    this.setState({selectedShips: arr})
    console.log(this.state.selectedShips)
  }

  connectAccount = async () => {
    const account = await reach.getDefaultAccount();
    console.log(account)
    const balanceAtomic = await reach.balanceOf(account);
    console.log(balanceAtomic)
    console.log(reach.formatAddress(account.getAddress()))
    const balance = reach.formatCurrency(balanceAtomic, 4);
    console.log(balance);
    // this.setState({ account, balance })
    try {
      const faucet = await reach.getFaucet();
      await reach.fundFromFaucet(account, 4);
      console.log('hi')
      const bal2 = await reach.balanceOf(account);
      console.log(bal2)
    } catch (e) {
      console.log('failed to get faucet: ', e)
    }
  }

  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.account, reach.parseCurrency(fundAmount));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.connectAccount}>Connect Algo</button>
        <Grid guessShips={this.guessShips} />
      </div>
    );
  }
}

export default App;
