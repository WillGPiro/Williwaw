import React from 'react';
import { shallow } from 'enzyme';
import WashingtonSR from './WashingtonSR';

describe('WashingtonSR component', () => {
  it('renders WashingtonSR', () => {
    const wrapper = shallow(<WashingtonSR  
      timestamp="1594285200"
      localTimestamp="1594252800"
      issueTimestamp="1594274400"
      fadedRating="0"
      solidRating="1"
      swell="absMinBreakingHeight: 1.69"
      wind="speed: 7"
      condition="pressure: 1017"
      charts="swell: https://charts-s3.msw.ms/archive/wave/750/16-1594285200-1.gif"/>);
    expect(wrapper).toMatchSnapshot();
  });
});

