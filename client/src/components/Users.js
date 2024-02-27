import React from 'react'
import Avatar from 'react-avatar'
import useWebSocket from 'react-use-websocket'
import { UncontrolledTooltip } from 'reactstrap'

import { WS_URL } from './../constants'
import { isUserEvent } from './../utils/isUserEvent'

function Users() {
  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isUserEvent
  })
  const users = Object.values(lastJsonMessage?.data.users || {})
  return users.map((user) => (
    <div key={user.username}>
      <span
        id={user.username}
        className="userInfo"
        key={user.username}
      >
        <Avatar
          name={user.username}
          size={40}
          round="20px"
        />
      </span>
      <UncontrolledTooltip
        placement="top"
        target={user.username}
      >
        {user.username}
      </UncontrolledTooltip>
    </div>
  ))
}
export default Users
