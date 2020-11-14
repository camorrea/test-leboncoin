import React from 'react'

import { Confidentiality, MessageType } from '../../../types'

import { Container, IconContainer, PrivateIcon, Text } from './styles'

type Props = {
  message: MessageType
}

const MessageItem = (props: Props) => {
  const { message } = props
  return (
    <Container confidentiality={message.confidentiality}>
      <Text>{message.text}</Text>
      {message.confidentiality === Confidentiality.private && (
        <IconContainer title={message.confidentiality}>
          <PrivateIcon />
        </IconContainer>
      )}
    </Container>
  )
}

export default React.memo(MessageItem)
