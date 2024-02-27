import React from 'react';

import Document from './Document';
import History from './History';
import Users from './Users';

export default function EditorSection() {
  return (
    <div className="main-content">
      <div className="document-holder">
        <div className="currentusers">
          <Users />
        </div>
        <Document />
      </div>
      <div className="history-holder">
        <History />
      </div>
    </div>
  )
}
