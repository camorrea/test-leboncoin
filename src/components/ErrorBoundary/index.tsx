import React from 'react'

import { Container, Error } from './styles'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Error>
            Something went wrong 🤯
            <br />
            Please try again
          </Error>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
