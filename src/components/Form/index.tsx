import React, { useCallback, useRef, useState } from 'react'
import { Confidentiality } from '../../types'
import { Button } from './Button'
import Input from './Input'
import Toggle, { ToggleContainer, ToggleLabel } from './Toggle'
import { ActionsContainer, Container, HiddenLabel, Title } from './styles'

const Form = ({ postMessage }: { postMessage: any }) => {
  const postMessageInput = useRef<HTMLInputElement>()
  const [message, setMessage] = useState<string>('')
  const [isPrivate, setIsPrivate] = useState<boolean>(false)

  const handleSetMessage = useCallback(
    (event) => {
      if (message !== event.target.value) setMessage(event.target.value)
    },
    [message]
  )

  const handleToggleConfidentiality = useCallback(() => {
    setIsPrivate(!isPrivate)
  }, [isPrivate])

  const handlePostMessage = useCallback(
    (event) => {
      event.preventDefault()
      postMessage(message, isPrivate)
      setMessage('')
    },
    [message, isPrivate]
  )

  return (
    <Container onSubmit={handlePostMessage}>
      <Title>Post message</Title>
      <HiddenLabel htmlFor="messageField">Write your message here</HiddenLabel>
      <Input
        type="text"
        autoFocus={true}
        autoComplete="off"
        ref={postMessageInput}
        disabled={false}
        name="message"
        placeholder="Write your message here"
        value={message}
        onChange={handleSetMessage}
        id="messageField"
      />
      <ActionsContainer>
        <ToggleContainer>
          <Toggle
            checked={isPrivate}
            onChange={handleToggleConfidentiality}
            id="isPrivate"
            label={Confidentiality.private}
          />
          <ToggleLabel>{Confidentiality.private}</ToggleLabel>
        </ToggleContainer>
        <Button onClick={handlePostMessage} disabled={message === ''}>
          Send
        </Button>
      </ActionsContainer>
    </Container>
  )
}

export default React.memo(Form)
