import styled from 'styled-components'

export const StyledButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  padding: 0 1rem;
  color: #110011;
  border-radius: 0.3rem;
  font-size: 0.85rem;
  transition: all ease-in-out 300ms;
  outline: none;
  background: linear-gradient(180deg, #69cbff 30%, #56bcff 100%);
  border: 1px solid #5bc6ff;

  :hover {
    background: linear-gradient(180deg, #56bcff 30%, #56bcff 100%);
  }

  ${({ disabled }) => (disabled ? 'opacity: 0.5;' : 'cursor: pointer;')}
`
