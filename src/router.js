import React from 'react'
import {
  HashRouter,
  // Switch,
  Route
} from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Topic from './components/Topic'

const router = () => (
  <HashRouter>
    <App>
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
      <Route path="/topic" component={Topic}/>
    </App>
  </HashRouter>
)

export default router