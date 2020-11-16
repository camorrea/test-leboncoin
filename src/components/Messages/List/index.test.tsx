import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

import { Confidentiality, User } from '../../../types'
import List from './'

configure({ adapter: new Adapter() })

const messages = [
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cadce3f',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    confidentiality: Confidentiality.public,
    user: User.anonymous
  },
  {
    id: 'e5bba129-7b23-61e8-fa2f-00001cgdce3f',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    confidentiality: Confidentiality.private,
    user: User.me
  }
]

const component = (
  <List
    messages={messages}
    hasUnreadMessage={false}
    setHasUnreadMessage={jest.fn()}
  />
)

describe('List Component', () => {
  it('should render properly', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a toggle checkbox input', () => {
    const wrapper = shallow(component)
    expect(wrapper.find('[data-test="hidePrivateToggle"]').exists()).toBe(true)
  })

  it('should render a toggle unchecked input', () => {
    const wrapper = shallow(component)
    expect(
      wrapper.find('[data-test="hidePrivateToggle"]').prop('checked')
    ).toBe(false)
  })

  it('should render messages', () => {
    const wrapper = shallow(component)
    expect(wrapper.find('[data-test="hidePrivateToggle"]').exists()).toBe(true)
  })
})
