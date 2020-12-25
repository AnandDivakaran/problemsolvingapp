const chai = require('chai');
const expect = chai.expect;

const app = require('./app2');

describe('sum of two numbers in a sorted array is zero', () => {
    context('scanArray', () => {
        it('should return undefined if a null is passed as input', () => {
            expect(app(null)).to.deep.equal(undefined);
        });

        it('should return undefined if an empty is passed as input', () => {
            expect(app([])).to.deep.equal(undefined);
        });   
        
        it('should return undefined if single element array is passed as input', () => {
            expect(app([3])).to.deep.equal(undefined);
        });  
        
        it('should return array [-2 , 2] if array [-2 , 2] is passed as input', () => {
            expect(app([-2, 2])).to.deep.equal([-2, 2]);
        });   

        it('should return undefined if array [-2 , 0] is passed as input', () => {
            expect(app([-2, 0])).to.deep.equal(undefined);
        });   

        it('should return undefined if array [-2 , 0, 1] is passed as input', () => {
            expect(app([-2, 0, 1])).to.deep.equal(undefined);
        });     
        
        it('should return undefined if array [-2 , 0, 1, 6] is passed as input', () => {
            expect(app([-2, 0, 1, 6])).to.deep.equal(undefined);
        });   

        it('should return [-2, 2] if array [-2 , 0, 2, 3] is passed as input', () => {
            expect(app([-2, 0, 2, 3])).to.deep.equal([-2, 2]);
        });  

        it('should return undefined if array [1 , 2, 3, 5] is passed as input', () => {
            expect(app([1, 2, 3, 5])).to.deep.equal(undefined);
        });          
    });
});