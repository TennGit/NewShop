import { applyMiddleware, compose, createStore } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      reduxPromiseMiddleware(),
    ),
  ),
)

export default store
