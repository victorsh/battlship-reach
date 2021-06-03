import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './style/App.css'

import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from '../backend/index.main.mjs'

const reach = loadStdlib('ALGO')

ReactDom.render(<App />, document.getElementById('app'))
