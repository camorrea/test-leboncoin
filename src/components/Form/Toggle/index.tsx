import React, { useCallback } from 'react'

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
  const { checked, onChange, disabled } = props

  const handleChange = useCallback(() => {
    if (onChange && !disabled) onChange()
  }, [onChange, disabled])

  return (
    <Container>
      <Background checked={checked} disabled={disabled}>
        <Switch checked={checked} disabled={disabled} />
      </Background>
      <HiddenCheckbox
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
    </Container>
  )
}

export default React.memo(Toggle)
