import styled from 'styled-components'

export const StyledInput = styled.input<{ ref: any }>`
  width: 100%;
  margin-bottom: 0.85rem;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  font-size: 0.8rem;
  outline: none;
  color: #333333;

  ::placeholder {
    color: #333333;
  }
`
