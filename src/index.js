import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import App from './components/App'

dotenv.config({
  path: '../.env.local'
})
console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
