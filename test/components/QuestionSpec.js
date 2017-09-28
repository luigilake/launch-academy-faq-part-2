import Question from '../../src/components/Question';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('Question', () => {
  let wrapper,
      handleClick;

  beforeEach(() => {
    jasmineEnzyme();
    handleClick = jasmine.createSpy('handleClick')
    wrapper = mount(
      <Question
        question={'What is Launch Academy?'}
        answer={'Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team'}
        selected={true}
        handleClick={handleClick}
      />
    )
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is Launch Academy?')
    expect(wrapper.find('p').text()).toEqual('Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team')
  });

  it('should render a SELECTED Question component that has an p with question text', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toEqual('Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team')
  });

  it('should invoke the handleClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(handleClick).toHavebeenCalled;
  })

  it('should have a div tag with the appropriate className from props WHEN SELECTED', () => {
    expect(wrapper.find('div.selected-question')).toHaveProp('className', 'selected-question')
  })

});
