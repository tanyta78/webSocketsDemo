import React from 'react'
import useWebSocket from 'react-use-websocket'
import { WS_URL } from './../constants'
import { isUserEvent } from './../utils/isUserEvent'

function History() {
  console.log('history')
  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isUserEvent
  })
  const activities = lastJsonMessage?.data.userActivity || []
  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={`activity-${index}`}>{activity}</li>
      ))}
    </ul>
  )
}

export default History
