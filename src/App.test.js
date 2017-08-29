import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './modules'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  )
})
