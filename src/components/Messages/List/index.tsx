import React from 'react'

import { Confidentiality, MessageType } from '../../../types'
import MessageItem from '../MessageItem'

import { Container, Title } from './styles'

// type Props = React.InputHTMLAttributes<HTMLInputElement> & {

// }

const messages = [
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f"',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e55d352f-7b23-61e8-fa2f-00001cad89d5',
    text:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    confidentiality: Confidentiality.private
  },
  {
    id: 'c816bcfc-7b23-61e8-fa2f-00001cade80d',
    text:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    confidentiality: Confidentiality.public
  },
  {
    id: 'c79f4b0f-7b23-61e8-819b-00001cad15fa',
    text: 'Ut enim ad minima veniam !',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f"',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e55d352f-7b23-61e8-fa2f-00001cad89d5',
    text:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    confidentiality: Confidentiality.private
  },
  {
    id: 'c816bcfc-7b23-61e8-fa2f-00001cade80d',
    text:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    confidentiality: Confidentiality.public
  },
  {
    id: 'c79f4b0f-7b23-61e8-819b-00001cad15fa',
    text: 'Ut enim ad minima veniam !',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f"',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    confidentiality: Confidentiality.public
  },
  {
    id: 'e55d352f-7b23-61e8-fa2f-00001cad89d5',
    text:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    confidentiality: Confidentiality.private
  },
  {
    id: 'c816bcfc-7b23-61e8-fa2f-00001cade80d',
    text:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    confidentiality: Confidentiality.public
  },
  {
    id: 'c79f4b0f-7b23-61e8-819b-00001cad15fa',
    text: 'Ut enim ad minima veniam !',
    confidentiality: Confidentiality.private
  }
]

const List = (/*(props: Props*/) => {
  return (
    <Container>
      <Title>{messages.length} messages</Title>
      {messages.map((message: MessageType) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </Container>
  )
}

export default React.memo(List)
