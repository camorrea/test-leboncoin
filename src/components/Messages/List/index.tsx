import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Confidentiality, MessageType } from '../../../types'
import MessageItem from '../MessageItem'
import Toggle, { ToggleContainer, ToggleLabel } from '../../Form/Toggle'
import { Title, TitleContainer } from './styles'

type Props = {
  messages: MessageType[]
  hasUnreadMessage: boolean
  setHasUnreadMessage: (boolean) => void
}

const List = ({ hasUnreadMessage, messages, setHasUnreadMessage }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null)
  const [hasPrivateFilter, setHasPrivateFilter] = useState<boolean>(false)

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

  const handleToggleFilterPrivate = useCallback(() => {
    setHasPrivateFilter(!hasPrivateFilter)
  }, [hasPrivateFilter])

  const filteredMessagesList = hasPrivateFilter
    ? messages.filter(
        (message) => message.confidentiality === Confidentiality.public
      )
    : messages

  return (
    <React.Fragment>
      <TitleContainer>
        <Title>{messages.length} messages</Title>
        <ToggleContainer>
          <Toggle
            checked={hasPrivateFilter}
            onChange={handleToggleFilterPrivate}
          />
          <ToggleLabel>Hide private</ToggleLabel>
        </ToggleContainer>
      </TitleContainer>
      {filteredMessagesList.map((message: MessageType) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div ref={bottomRef}></div>
    </React.Fragment>
  )
}

export default React.memo(List)
