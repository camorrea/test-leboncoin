import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100% 100%;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vh;
  max-width: 25rem;
  height: calc(95vh - 5rem);
  margin: 1rem;
  box-shadow: 0px 0px 10px 0px #dddddd;

  @media screen and (min-width: 768px) {
    height: 95vh;
    margin: 0 1rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Error = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #d62b2b;
`

export const Loader = () => (
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
      />
    </path>
  </svg>
)
