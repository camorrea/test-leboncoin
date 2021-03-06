import React, { useCallback } from 'react'

import { HiddenLabel } from '../styles'
import {
  Background,
  Container,
  HiddenCheckbox,
  StyledToggleContainer,
  StyledToggleLabel,
  Switch
} from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean
  onChange?: () => void
  disabled?: boolean
  label: string
  id: string
}

export const ToggleContainer = StyledToggleContainer

export const ToggleLabel = StyledToggleLabel

const Toggle = ({ checked, onChange, disabled, label, id }: Props) => {
  const handleChange = useCallback(() => {
    if (onChange && !disabled) onChange()
  }, [onChange, disabled])

  return (
    <Container>
      <HiddenLabel htmlFor={id}>{label}</HiddenLabel>
      <Background checked={checked} disabled={disabled}>
        <Switch checked={checked} disabled={disabled} />
      </Background>
      <HiddenCheckbox
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        id={id}
      />
    </Container>
  )
}

export default React.memo(Toggle)
