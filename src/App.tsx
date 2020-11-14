import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createGlobalStyle } from 'styled-components'
import { Container, Wrapper } from './components/Container'
import Form from './components/Form'
import List from './components/Messages/List'
import { Confidentiality, MessageType } from './types'

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, 
  big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, 
  dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
  canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, 
  time, mark, audio, video  {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ul, ol {
    list-style: none;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {
    display: block;
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const App = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/messages')
      setMessages(result.data)
    }

    fetchData()
  }, [])

  const postMessage = (text: string, isPrivate: boolean) => {
    const messageToPost: MessageType = {
      id: Math.random().toString(36).substring(7),
      text,
      confidentiality: isPrivate
        ? Confidentiality.private
        : Confidentiality.public
    }

    messages.push(messageToPost)

    setMessages(messages)
    setHasUnreadMessage(true)
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <List
            hasUnreadMessage={hasUnreadMessage}
            setHasUnreadMessage={setHasUnreadMessage}
            messages={messages}
          />
          <Form postMessage={postMessage} />
        </Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default App
