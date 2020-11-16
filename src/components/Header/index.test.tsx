import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

import Header from './'

configure({ adapter: new Adapter() })

const component = <Header />

describe('Header Component', () => {
  it('should render properly', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
