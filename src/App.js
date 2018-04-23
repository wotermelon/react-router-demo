import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <ul className="navbar">
            <li>
              <Link to="/">主页</Link>
            </li>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
            <li>
              <Link to="/topic/1">111</Link>
            </li>
            <li>
              <Link to="/topic/2">222</Link>
            </li>
          </ul>
        </header>
        <hr />
        <h1>主页</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App
