import Player from './Player'

class Attacher extends Player {
  constructor(props) {
    super(props);
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    backend.attacher(ctc, this);
  }
  async acceptWager(wagerAtomic) {
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolve => {
      this.setState({wager, resolve})
    });
  }
  termsAccepted() {
    this.state.resolve();
  }
}

export default Attacher;
