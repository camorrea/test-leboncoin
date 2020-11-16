import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

import { Confidentiality, User } from '../../../types'
import MessageItem from './'

configure({ adapter: new Adapter() })

const message = {
  id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  confidentiality: Confidentiality.public,
  user: User.anonymous
}

const component = <MessageItem message={message} />

describe('MessageItem Component', () => {
  it('should render properly', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
