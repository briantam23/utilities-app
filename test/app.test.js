import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import { expect } from 'chai';

import App from '../src/components/App';


const adapter = new Adapter();
Enzyme.configure({ adapter });


describe('<App/> component', () => {
    let appWrapper, shallow;

    before('Create component', () => {
        appWrapper = shallow(<App/>);
    })

    it('renders', () => {
        expect(appWrapper.find('hr')).to.have.length(1);
    })
})