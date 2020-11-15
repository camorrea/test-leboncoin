import React from 'react'
import styled from 'styled-components'

export const ListWrapper = styled.div`
  flex-grow: 2;
  overflow: scroll;
  padding: 0.85rem;
  box-shadow: 0 -5px 5px rgba(182, 182, 182, 0.25) inset;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  margin-bottom: 0.85rem;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: #333333;
`

export const ScrollDown = styled.div`
  position: fixed;
  right: 1rem;
  top: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.3rem;
  border-radius: 1.1rem;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all ease 300ms;

  @media screen and (min-width: 640px) {
    right: 3rem;
    top: 80%;
  }

  :hover {
    transform: scale(1.2);
  }
`

export const ArrowIcon = () => (
  <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1">
    <g id="surface1">
      <path
        fill="#FFFFFF"
        d="M 14.847656 4.027344 L 14.09375 3.277344 C 13.996094 3.175781 13.878906 3.125 13.75 3.125 C 13.621094 3.125 13.503906 3.175781 13.402344 3.277344 L 7.5 9.179688 L 1.59375 3.277344 C 1.492188 3.175781 1.378906 3.125 1.246094 3.125 C 1.117188 3.125 1 3.175781 0.902344 3.277344 L 0.148438 4.027344 C 0.0507812 4.128906 0 4.242188 0 4.371094 C 0 4.503906 0.0507812 4.617188 0.148438 4.71875 L 7.152344 11.71875 C 7.253906 11.820312 7.367188 11.871094 7.5 11.871094 C 7.628906 11.871094 7.742188 11.820312 7.84375 11.71875 L 14.847656 4.71875 C 14.945312 4.617188 14.996094 4.503906 14.996094 4.371094 C 14.996094 4.242188 14.945312 4.128906 14.847656 4.027344 Z M 14.847656 4.027344 "
      />
    </g>
  </svg>
)
