import React from 'react'

import { Container, Content, Logo, LogoIcon, Subtitle, Title } from './styles'

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <LogoIcon />
        </Logo>
        <Title>Secret Messenger</Title>
        <Subtitle>
          <strong>Secret messenger</strong> is a simple messenging application.
          <br />
          <br />
          Sending and receiving message is preety basic but...
          <br />
          with <strong>Secret messenger</strong> you can choose to make them
          private or public 😎
        </Subtitle>
      </Content>
    </Container>
  )
}

export default Header
