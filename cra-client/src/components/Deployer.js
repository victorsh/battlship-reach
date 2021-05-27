import Player from './Player';

class Deployer extends Player {
  constructor(props) {
    super(props);
  }

  async deploy() {
    const ctc = this.props.account.deploy(backend);
    this.wager = reach.parseCurrency(this.state.wager);
    backend.deployer(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
  }
}

export default Deployer;
