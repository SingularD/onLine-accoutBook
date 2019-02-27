import React from 'react'
import { shallow } from 'enzyme'
import ViewTab from '../ViewTab'

const props = {
  activeTab : 'list'
}


let wrapper
describe('test ViewTab component', () => {
  beforeEach( () => {
    wrapper = shallow(<ViewTab {...props}/>)
  })
  it('should render the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correct activeTab data', () => {
    expect(wrapper.find('.nav-link').first().text()).toEqual(props.activeTab)
  })
})