export function isUserEvent(message) {
  let evt = JSON.parse(message.data);
  return evt.type === 'userevent';
}