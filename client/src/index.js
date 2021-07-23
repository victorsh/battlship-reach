import React from 'react'
import ReactDom from 'react-dom'

import Store from './store/Store'

import App from './components/App'
import App3 from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

ReactDom.render(
  <React.StrictMode>
    <Store><App /></Store>
  </React.StrictMode>,
  document.getElementById('root')
)
