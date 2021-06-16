import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './store/store.js'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
