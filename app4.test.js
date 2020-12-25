const chai = require('chai');
const expect = chai.expect;

const app = require('./app4');

describe('maximum sum of n consecutive elements in an array', () => {
    context('scanArray', () => {
        it('should return 0 if input array is null', () => {
            expect(app(null, 3)).to.deep.equal(0);
        });

        it('should return 0 if input array is empty', () => {
            expect(app([], 3)).to.deep.equal(0);
        });    

        it('should return 0 if input array length is less than provided size', () => {
            expect(app([1], 3)).to.deep.equal(0);
        });   
        
        it('should return 0 if provided size is 0', () => {
            expect(app([1], 0)).to.deep.equal(0);
        });  
        
        it('should return 0 if provided size is negative', () => {
            expect(app([1], -3)).to.deep.equal(0);
        });   

        it('should return 6 for the following array [1, 3, 2] and size 3', () => {
            expect(app([1, 3, 2], 3)).to.deep.equal(6);
        });   

        it('should return 5 for the following array [1, 3, 2] and size 2', () => {
            expect(app([1, 3, 2], 2)).to.deep.equal(5);
        });   
    });
});