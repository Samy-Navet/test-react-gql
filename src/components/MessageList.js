import React from 'react'
import MessageItem from './MessageItem';


const MessageList = ({Messages, Lu, setLu}) => {
  const messages = Messages.map(message => (
    <MessageItem key={message.id} id={message.id} username={message.username} objet={message.objet} content={message.content} Lu={Lu} setLu={setLu} />
  ))

  return(<div className="msg-liste">{messages}</div>)
}

export default MessageList