import styled from 'styled-components'

export const Container = styled.form`
  height: 10rem;
  padding: 0.85rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  margin-bottom: 0.85rem;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1rem;
  color: #333333;
`

export const HiddenLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0px;
  height: 0px;
  margin: 0;
  opacity: 0;
`
