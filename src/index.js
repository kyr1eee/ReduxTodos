import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

// store连接action和reducer
const store = createStore(rootReducer)

ReactDom.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)
