import React, { useCallback, useState } from 'react'

import { Confidentiality } from '../../types'
import { Button } from './Button/styles'
import { Input } from './Input/styles'
import { ActionsContainer, Container, HiddenLabel, Title } from './styles'
import Toggle, { ToggleContainer, ToggleLabel } from './Toggle'

type Props = {
  onSubmit: (message: string, isPrivate: boolean) => Promise<void>
}

const Form = ({ onSubmit }: Props) => {
  const [message, setMessage] = useState<string>('')
  const [isPrivate, setIsPrivate] = useState<boolean>(false)

  const handleSetMessage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (message !== event.target.value) setMessage(event.target.value)
    },
    [message]
  )

  const handleToggleConfidentiality = useCallback(() => {
    setIsPrivate(!isPrivate)
  }, [isPrivate])

  const handlePostMessage = useCallback(() => {
    onSubmit(message, isPrivate)
    setMessage('')
  }, [message, isPrivate, onSubmit])

  return (
    <Container onSubmit={handlePostMessage}>
      <Title>Post message</Title>
      <HiddenLabel htmlFor="messageField">Write your message here</HiddenLabel>
      <Input
        type="text"
        autoFocus={true}
        autoComplete="off"
        disabled={false}
        name="message"
        placeholder="Write your message here"
        value={message}
        onChange={handleSetMessage}
        id="messageField"
        data-test="messageInput"
      />
      <ActionsContainer>
        <ToggleContainer>
          <Toggle
            checked={isPrivate}
            onChange={handleToggleConfidentiality}
            id="isPrivate"
            label={Confidentiality.private}
            data-test="confidentialityToggle"
          />
          <ToggleLabel>{Confidentiality.private}</ToggleLabel>
        </ToggleContainer>
        <Button
          onClick={handlePostMessage}
          disabled={message === ''}
          data-test="submitButton"
        >
          Send
        </Button>
      </ActionsContainer>
    </Container>
  )
}

export default React.memo(Form)
