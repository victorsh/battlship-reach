Attacher = () => ({
  ...this.Player('Attacher'),
  acceptWager: async (amt) => {
    const formattedAmt = this.state.reach.formatCurrency(amt)
    if (globals.DEBUG) console.log('Attacher received wager: ', formattedAmt)
    return await new Promise(resolveAcceptP => {
      if (globals.DEBUG) console.log(
        `Event accept-wager,
        player: ${this.state.player},
        status: ${this.state.status},
        wager: ${formattedAmt}`
      )
      this.setState({status: 'attacher-accept-wager', acceptTerms: resolveAcceptP, wager: formattedAmt})
    })
  }
})