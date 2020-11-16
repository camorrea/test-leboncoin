import React from 'react'

import { Confidentiality, MessageType } from '../../../types'
import { Container, Content, IconContainer, PrivateIcon, Text } from './styles'

type Props = {
  message: MessageType
}

const MessageItem = ({ message }: Props) => {
  return (
    <Container user={message.user}>
      <Content confidentiality={message.confidentiality}>
        <Text>{message.text}</Text>
        {message.confidentiality === Confidentiality.private && (
          <IconContainer title="⚠️ this message is private">
            <PrivateIcon />
          </IconContainer>
        )}
      </Content>
    </Container>
  )
}

export default React.memo(MessageItem)
