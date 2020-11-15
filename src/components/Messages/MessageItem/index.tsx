import React from 'react'
import { Confidentiality, MessageType } from '../../../types'
import { Container, IconContainer, PrivateIcon, Text, Wrapper } from './styles'

type Props = {
  message: MessageType
}

const MessageItem = (props: Props) => {
  const { message } = props
  return (
    <Wrapper user={message.user}>
      <Container confidentiality={message.confidentiality}>
        <Text>{message.text}</Text>
        {message.confidentiality === Confidentiality.private && (
          <IconContainer title="⚠️ this message is private">
            <PrivateIcon />
          </IconContainer>
        )}
      </Container>
    </Wrapper>
  )
}

export default React.memo(MessageItem)
