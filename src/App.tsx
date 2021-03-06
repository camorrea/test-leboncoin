import axios from 'axios'
import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { createGlobalStyle } from 'styled-components'

import {
  Container,
  Content,
  Error,
  InfoContainer,
  Loader,
  Wrapper
} from './components/Container/styles'
import ErrorBoundary from './components/ErrorBoundary'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/Messages/List'
import { ListWrapper } from './components/Messages/List/styles'
import { Confidentiality, DataStatus, MessageType, User } from './types'

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
  const [hasUnreadMessage, setHasUnreadMessage] = useState<boolean>(false)
  const [dataStatus, setDataStatus] = useState<DataStatus>(DataStatus.notAsked)
  const [postStatus, setPostStatus] = useState<DataStatus>(DataStatus.notAsked)

  const fetchData = async () => {
    setDataStatus(DataStatus.loading)
    try {
      const result = await axios('http://localhost:3001/messages')
      setMessages(result.data)
      setDataStatus(DataStatus.success)
    } catch (err) {
      setDataStatus(DataStatus.failure)
      console.error('Unable to get messages')
    }
  }

  const postMessage = async (text: string, isPrivate: boolean) => {
    const messageToPost: MessageType = {
      id: uuid(),
      text,
      confidentiality: isPrivate
        ? Confidentiality.private
        : Confidentiality.public,
      user: User.me
    }

    try {
      const result = await axios.post(
        'http://localhost:3001/messages',
        messageToPost
      )
      messages.push(result.data)
      setMessages(messages)
      setPostStatus(DataStatus.success)
      setHasUnreadMessage(true)
    } catch (err) {
      setPostStatus(DataStatus.failure)
      setHasUnreadMessage(true)
      console.error('Unable to post message')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderList = () => {
    switch (dataStatus) {
      case DataStatus.failure:
        return (
          <InfoContainer>
            <Error>
              Error 😩
              <br /> Please try again
            </Error>
          </InfoContainer>
        )
      case DataStatus.success:
        return (
          <List
            hasUnreadMessage={hasUnreadMessage}
            setHasUnreadMessage={setHasUnreadMessage}
            messages={messages}
          />
        )
      case DataStatus.loading:
      case DataStatus.notAsked:
      default:
        return (
          <InfoContainer>
            <Loader />
          </InfoContainer>
        )
    }
  }

  return (
    <ErrorBoundary>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Container>
          <Content>
            <ListWrapper>
              {renderList()}
              {postStatus === DataStatus.failure && (
                <Error>Error while posting message 😩</Error>
              )}
            </ListWrapper>
            <Form onSubmit={postMessage} />
          </Content>
        </Container>
      </Wrapper>
    </ErrorBoundary>
  )
}

export default App
