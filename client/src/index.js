import React from 'react'
import ReactDom from 'react-dom'

import Store from './store/Store'

import App from './components/App'
import App2 from './components/App2'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

ReactDom.render(
  <React.StrictMode>
    <Store>
      {/* <App /> */}
      <App2 />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)
