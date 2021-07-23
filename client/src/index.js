import React from 'react'
import ReactDom from 'react-dom'

import Store from './store/Store'
import App from './components/App'

import './style/index.css'

ReactDom.render(
  <React.StrictMode>
    <Store><App /></Store>
  </React.StrictMode>,
  document.getElementById('root')
)
