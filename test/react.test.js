import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import { expect } from 'chai';
import App from '../src/components/App';
import Buttons from '../src/components/Buttons';
import SplitTimeList from '../src/components/SplitTimeList';


const adapter = new Adapter();
Enzyme.configure({ adapter });


describe('The React Components', () => {

    describe('<App/> component', () => {
        let appWrapper;
    
        before('Create component', () => appWrapper = shallow(<App/>));
    
        it('renders a <h1>', () => expect(appWrapper.find('h1')).to.have.length(1));
    
        it('renders an <ul>', () => expect(appWrapper.find('ul')).to.have.length(1));
    })

    describe('<Buttons/> component', () => {
        let buttonWrapper, startSpy;
        const split = () => {
            /* const { time, splitTimes } = this.state;
            this.setState({ splitTimes: [...splitTimes, time] }); */
        }

        before('Create component', () => {
            startSpy = spy();
            buttonWrapper = shallow(<Buttons start={ startSpy } split={ split }/>);
        })

        it('renders each <button>', () => expect(buttonWrapper.find('button')).to.have.length(4));

        it('when the `Start` <button> is clicked, it invokes a function passed in', () => {

            // The function passed into button should not be called immediately.
            expect(startSpy.calledOnce).to.be.false;

            //This will trigger any onClick handlers registered to the component.
            buttonWrapper.find('button').at(0).simulate('click');

            expect(startSpy.calledOnce).to.be.true;
        })
    })
    
    describe('<SplitTimeList/> component', () => {
        let splitWrapper, resetSpy;
        let splitTimes = [1000, 2000]; 
    
        before('Create component', () => {
            resetSpy = spy();
            splitWrapper = shallow(<SplitTimeList splitTimes={ splitTimes } reset={ resetSpy }/>);
        })

        it('renders a <h3> for each split time', () => expect(splitWrapper.find('h3')).to.have.length(2));

        it('when the `Reset time to this split` <button> is clicked, it invokes a function passed in', () => {

            // The function passed into button should not be called immediately.
            expect(resetSpy.calledOnce).to.be.false;

            //This will trigger any onClick handlers registered to the component.
            splitWrapper.find('button').at(0).simulate('click');

            expect(resetSpy.calledOnce).to.be.true;
        })
    })
})
