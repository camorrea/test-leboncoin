import React, { useLayoutEffect, useRef } from 'react'

import { MessageType } from '../../../types'
import MessageItem from '../MessageItem'

import { Container, Title } from './styles'

type Props = {
  messages: MessageType[]
  hasUnreadMessage: boolean
  setHasUnreadMessage: (boolean) => void
}

const List = ({ hasUnreadMessage, messages, setHasUnreadMessage }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    const node = bottomRef.current
    node?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    })
  }

  useLayoutEffect(() => {
    if (hasUnreadMessage) scrollToBottom()
    setHasUnreadMessage(false)
  }, [hasUnreadMessage, setHasUnreadMessage])

  return (
    <Container>
      <Title>{messages.length} messages</Title>
      {messages.map((message: MessageType) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div ref={bottomRef}></div>
    </Container>
  )
}

export default React.memo(List)
