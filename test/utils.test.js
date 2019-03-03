import { expect } from 'chai';
import sinon from 'sinon';
import formatTime, { padding } from '../src/utils';


describe('The Utility Functions', () => {
    
    describe('padding function', () => {

        it('adds padding if the number is 1 digit', () => {
            expect(padding(1)).to.equal('01');
        })

        it('does not add padding if the number is 2 digits', () => {
            expect(padding(11)).to.equal('11');
        })
    })

    describe('formatTime function', () => {

        it('converts ms to seconds', () => {
            expect(formatTime(10000)).to.eql('00:00:10:00');
        })

        it('converts ms to seconds & minutes', () => {
            expect(formatTime(100000)).to.eql('00:01:40:00');
        })

        it('converts ms to seconds, minutes, & hours', () => {
            expect(formatTime(10000000)).to.equal('02:46:40:00');
        })
    })
})
