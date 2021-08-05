import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import App from './components/App'
import './style/index.scss'

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
