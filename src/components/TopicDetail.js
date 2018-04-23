import React from 'react'

const TopicDetail = ({ match }) => (
  <div>{match.params.id}</div>
)

export default TopicDetail