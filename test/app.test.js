import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import { expect } from 'chai';

import App from '../src/components/App';


const adapter = new Adapter();
Enzyme.configure({ adapter });


describe('<App/> component', () => {
    let appWrapper;

    before('Create component', () => {
        appWrapper = shallow(<App/>);
    })

    it('renders a <h1>', () => {
        expect(appWrapper.find('h1')).to.have.length(1);
    })

    it('renders an <ul>', () => {
        expect(appWrapper.find('ul')).to.have.length(1);
    })
})