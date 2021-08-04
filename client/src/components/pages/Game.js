import React, { useEffect, useContext, useState } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'
import {
  useHistory, BrowserRouter, Route, RouteComponentProps, withRouter, Switch, Link, NavLink
} from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'


import globals from '../../lib/globals'
import Grid from '../Grid'

const Game = () => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)
  
  const shipSelections = (index, type, allowSubmit) => {
    if(type === 'select') {
      const arr = state.selectedShips
      arr[index] = arr[index] === 1 ? 0 : 1
      appState({...rstate.main, selectedShips: arr, shipSubmit: allowSubmit})
    } else if (type === 'guess') {
      const arr = state.guessedShips
      arr[index] = arr[index] === 1 ? 0 : 1
      appState({...rstate.main, selectedShips: arr, shipSubmit: allowSubmit})
    } else {
      alert('wrong array type in ship selection')
    }
  }
  
  return (
    <div>
      select ships
      <Grid shipSelections={shipSelections} type='guess' />
      guess ships
      <Grid shipSelections={shipSelections} type='select' />
    </div>
  )
}

export default Game
