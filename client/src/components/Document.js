import React from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';
import useWebSocket from 'react-use-websocket';

import { WS_URL } from './../constants';
import { isDocumentEvent } from './../utils/isDocumentEvent';


function Document() {
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: isDocumentEvent
  });

  let html = lastJsonMessage?.data.editorContent || '';

  function handleHtmlChange(e) {
    sendJsonMessage({
      type: 'contentchange',
      content: e.target.value
    });
  }

  return (
    <DefaultEditor value={html} onChange={handleHtmlChange} />
  );
}

export default Document