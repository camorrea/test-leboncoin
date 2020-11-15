import React from 'react'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vh;
  max-width: 25rem;
  height: 95vh;
  margin: 0 1rem;
  box-shadow: 0px 0px 10px 0px #dddddd;
`

export const StyledInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const StyledError = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #d62b2b;
`

export const StyledLoader = () => (
  <svg
    width="34px"
    height="34px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M10 50A40 40 0 0 0 90 50A40 46.5 0 0 1 10 50"
      fill="#109ad7"
      stroke="none"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 53.25;360 50 53.25"
      ></animateTransform>
    </path>
  </svg>
)
