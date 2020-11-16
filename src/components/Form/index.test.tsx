import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

import Form from './'

configure({ adapter: new Adapter() })

const component = <Form onSubmit={jest.fn()} />

describe('Form Component', () => {
  it('should render properly', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a message input', () => {
    const wrapper = shallow(component)
    expect(wrapper.find('[data-test="messageInput"]').exists()).toBe(true)
  })

  it('should render an empty message input', () => {
    const wrapper = shallow(component)
    expect(wrapper.find('[data-test="messageInput"]').prop('value')).toBe('')
  })

  it('should render a toggle checkbox input', () => {
    const wrapper = shallow(component)
    expect(wrapper.find('[data-test="confidentialityToggle"]').exists()).toBe(
      true
    )
  })

  it('should render a toggle unchecked input', () => {
    const wrapper = shallow(component)
    expect(
      wrapper.find('[data-test="confidentialityToggle"]').prop('checked')
    ).toBe(false)
  })

  it('should render a submit button', () => {
    const wrapper = shallow(component)
    expect(wrapper.find('[data-test="submitButton"]').exists()).toBe(true)
  })

  it('a submit function should be triggered on click event', () => {
    const fn = jest.fn()
    const wrapper = shallow(<Form onSubmit={fn} />)
    wrapper.find('[data-test="submitButton"]').simulate('click')
    expect(fn).toHaveBeenCalled()
  })
})
