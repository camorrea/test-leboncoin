import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createGlobalStyle } from 'styled-components'
import { Confidentiality } from './types'
import { Container, Wrapper } from './components/Container'
import Toggle, { ToggleContainer, ToggleLabel } from './components/Form/Toggle'
import List from './components/Messages/List'

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
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/posts')

      setMessages(result.data)
    }

    fetchData()
  }, [])

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <ul>
            {messages.map((item: any) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
          <List />
          <ToggleContainer>
            <ToggleLabel>{Confidentiality.public}</ToggleLabel>
            <Toggle onChange={() => console.log('truc')} />
            <ToggleLabel>{Confidentiality.private}</ToggleLabel>
          </ToggleContainer>
        </Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default App
