import React, { useContext } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Context } from '../store/Store'
import globals from '../lib/globals'
import dispatcher from './common/dispatcher'

const PreGame = () => {
  const [state, dispatch] = useContext(Context)

  const connectAccount = async (e) => {
    e.preventDefault()

    let balance;
    try {
      if (state.account === null) {
        const account = await state.reach.getDefaultAccount()
        const address = await state.reach.formatAddress(account.getAddress())
        if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`)
    
        balance = await state.reach.balanceOf(account)
        balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
    
        dispatcher({account, address, balance, status: 'connected'}, dispatch)
      } else {
        balance = await state.reach.balanceOf(state.account)
        balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)

        dispatcher({balance, status: 'connected'}, dispatch)
      }
    } catch (e) {
      if (globals.DEBUG) console.log(e)
      dispatcher({status: 'landing', errorMessage: e}, dispatch)
      setTimeout(() => dispatcher({errorMessage: ''}), 5000)
    }
  }

  const fundAccount = async (e) => {
    e.preventDefault()

    const fundAmount = state.fundAmount
    if (isNaN(fundAmount)) {
      alert('Invalid fund input')
      dispatcher({fundAmount: ''})
      return
    }

    if (Number(fundAmount) < globals.MIN_VALUE) {
      alert('Fund amount must be a value greater than 0')
      dispatcher({fundAmount: ''})
      return
    }

    dispatcher({loadingFaucet: true})
    try {
      const faucet = await state.reach.getFaucet()
      await state.reach.transfer(faucet, state.account, state.reach.parseCurrency(state.fundAmount))
      let balance = await state.reach.balanceOf(state.account)
      balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
      dispatcher({balance, loadingFaucet: false, fundAmount: 0})
      dispatcher({fundAmount: ''})
    } catch (e) {
      if (globals.DEBUG) console.log('failed to get faucet: ', e)
      dispatcher({loadingFaucet: false, errorMessage: e})
      setTimeout(() => { dispatcher({errorMessage: ''}); console.log('ERROR TIMEOUT FAUCET')}, 5000)
    }
  }

  const errorMessage = state.errorMessage !== null ? <div className='guide-text'>{state.errorMessage.toString()}</div> : ''

  switch (state.status) {
    case 'landing': return (
    <>
      <div style={{fontSize: '1.5em', marginTop: '1.5%', marginBottom: '2%'}}>Connect you're Algorand wallet to get started.</div>
      <Button style={{marginTop: '2%', marginBottom:'1.5%'}} variant='success' onClick={e => connectAccount(e)}>Connect Wallet</Button>
      {errorMessage}
    </>
    ); break
    case 'connected': return (
    <>
      <div className='fund'>
        <InputGroup size='sm' className='mb-3'>
          <FormControl
            value={state.fundAmount || ''}
            onChange={(e) => dispatcher({ fundAmount: e.target.value }, dispatch)}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm" />
          <InputGroup.Append>
            <Button variant='secondary' disabled>ALGO</Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button variant='outline-success' onClick={(e) => fundAccount(e)}>Fund</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div style={{width: '33%', display: 'flex', alignItems: 'baseline'}}>
        {state.loadingFaucet ? <div>Loading funds from faucet...</div> : null}
      </div>
      <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
        <Button variant='danger' onClick={() => dispatcher({status: 'landing'}, dispatch)}>Back</Button>
        <Button variant='success' onClick={() => dispatcher({status: 'select-player'}, dispatch)}>Play</Button>
      </div>
      {errorMessage}
    </>
    ); break
    case 'select-player': return (
    <>
      <div className='guide-text'>Select Player</div>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '40%'}}>
        <Button variant='danger' onClick={() => dispatcher({status: 'connected'}, dispatch)}>Back</Button>
        <Button variant='primary' onClick={() => dispatcher({status: 'deployer-start', player: 'deployer'}, dispatch)}>Deployer</Button>
        <Button variant='success' onClick={() => dispatcher({status: 'attacher-start', player: 'attacher'}, dispatch)}>Attacher</Button>
      </div>
      {errorMessage}
    </>
    );
    default: return ''
  }
}

export default PreGame
