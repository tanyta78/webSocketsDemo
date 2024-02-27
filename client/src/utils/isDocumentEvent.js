export function isDocumentEvent(message) {
  let evt = JSON.parse(message.data)
  return evt.type === 'contentchange'
}
