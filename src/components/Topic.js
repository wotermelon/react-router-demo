import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom'
import TopicDetail from './TopicDetail'

class Topic extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h2>Topic</h2>
        <Route path={`${this.props.match.url}/:id`} component={TopicDetail}></Route>
      </div>
    )
  }
}

export default Topic