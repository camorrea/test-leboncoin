import React, { useCallback, useEffect, useState } from 'react'

import {
  Background,
  Container,
  HiddenCheckbox,
  StyledToggleLabel,
  StyledToggleContainer,
  Switch
} from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean
  onChange?: () => void
  disabled?: boolean
}

export const ToggleContainer = StyledToggleContainer

export const ToggleLabel = StyledToggleLabel

const Toggle = (props: Props) => {
  const { className, checked, onChange, disabled } = props

  const [isChecked, setIsChecked] = useState(props.checked || false)

  useEffect(() => {
    setIsChecked(props.checked || false)
  }, [props.checked])

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setIsChecked(event.target.checked)
      if (onChange && !disabled) onChange(event)
    },
    [onChange, disabled]
  )

  return (
    <Container className={className}>
      <Background checked={isChecked} disabled={disabled}>
        <Switch checked={isChecked} disabled={disabled} />
      </Background>
      <HiddenCheckbox {...{ checked, onChange: handleChange, disabled }} />
    </Container>
  )
}

export default React.memo(Toggle)
