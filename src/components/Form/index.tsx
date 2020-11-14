import React, { useCallback, useRef, useState } from 'react'
import { Confidentiality } from '../../types'
import { Button } from './Button'
import Input from './Input'
import Toggle, { ToggleContainer, ToggleLabel } from './Toggle'
import { ActionsContainer, Container, Title } from './styles'

const Form = ({ postMessage }: { postMessage: any }) => {
  const postMessageInput = useRef<HTMLInputElement>()
  const [message, setMessage] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)

  const handleSetMessage = useCallback(
    (event) => {
      if (message !== event.target.value) setMessage(event.target.value)
    },
    [message]
  )

  const handleToggleConfidentiality = useCallback(() => {
    setIsPrivate(!isPrivate)
  }, [isPrivate])

  const handlePostMessage = useCallback(() => {
    postMessage(message, isPrivate)
  }, [message, isPrivate])

  return (
    <Container>
      <Title>Post message</Title>
      <Input
        autoFocus={true}
        ref={postMessageInput}
        disabled={false}
        name="message"
        placeholder="Write your message here"
        value={message}
        onChange={handleSetMessage}
      />
      <ActionsContainer>
        <ToggleContainer>
          <Toggle checked={isPrivate} onChange={handleToggleConfidentiality} />
          <ToggleLabel>{Confidentiality.private}</ToggleLabel>
        </ToggleContainer>
        <Button onClick={handlePostMessage}>Send</Button>
      </ActionsContainer>
    </Container>
  )
}

export default React.memo(Form)
