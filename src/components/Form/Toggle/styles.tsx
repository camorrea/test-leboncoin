import styled from 'styled-components'

const HEIGHT = 16
const WIDTH = 32
const TRANSLATION_RIGHT = WIDTH - HEIGHT

export const StyledToggleContainer = styled.div`
  display: flex;
`

export const StyledToggleLabel = styled.div`
  padding: 0 0.5rem;
  color: #333333;
  font-size: 0.8rem;
`

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  margin-bottom: 1rem;
`

export const Background = styled.div<{ checked?: boolean; disabled?: boolean }>`
  border: 1px solid #cccccc;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background-color: ${({ checked }) => (checked ? '#BBFFEE' : '#ffffff')};
  transition: background-color 0.2s ease-in, border-color 0.2s ease-in;
  ${({ disabled }) => disabled && 'opacity: 0.5;'}
`

export const Switch = styled.div<{ checked?: boolean; disabled?: boolean }>`
  height: 14px;
  width: 14px;
  transform: translateX(
    ${({ checked }) => (checked ? TRANSLATION_RIGHT : 0)}px
  );
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.08);
  background-color: ${({ checked }) => (checked ? '#22DDAA' : '#AAAAAA')};
  ${({ disabled }) => disabled && 'opacity: 0.5;'}
`

export const HiddenCheckbox = styled.input.attrs<{
  type: string
  disabled?: boolean
}>({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`
