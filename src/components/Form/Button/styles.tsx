import styled from 'styled-components'

export const StyledButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  padding: 0 1rem;
  color: #ffffff;
  border-radius: 0.3rem;
  font-size: 0.85rem;
  transition: all ease-in-out 300ms;
  outline: none;
  background: linear-gradient(180deg, #444444 30%, #444444 100%);
  border: 1px solid #444444;

  :hover {
    background: linear-gradient(180deg, #222222 30%, #222222 100%);
  }

  ${({ disabled }) => (disabled ? 'opacity: 0.5;' : 'cursor: pointer;')}
`
