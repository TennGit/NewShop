import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

window.___store = store

// render the app
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
