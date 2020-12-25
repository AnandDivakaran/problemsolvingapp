const chai = require('chai');
const expect = chai.expect;

const app = require('./app3');

describe('count of unique values in a sorted array', () => {
    context('scanArray', () => {
        it('should return 0 if a null is passed as input', () => {
            expect(app(null)).to.deep.equal(0);
        });

        it('should return 0 if a empty array is passed as input', () => {
            expect(app([])).to.deep.equal(0);
        });

        it('should return 1 if a single element array is passed as input', () => {
            expect(app([3])).to.deep.equal(1);
        });      
        
        it('should return 2 if [0, 1] array is passed as input', () => {
            expect(app([0, 1])).to.deep.equal(2);
        });    
        
        it('should return 3 if [0, 1, 5] array is passed as input', () => {
            expect(app([0, 1, 5])).to.deep.equal(3);
        }); 
        
        it('should return 2 if [0, 1, 1] array is passed as input', () => {
            expect(app([0, 1, 1])).to.deep.equal(2);
        });   
        
        it('should return 4 if [0, 1, 2, 5, 5] array is passed as input', () => {
            expect(app([0, 1, 2, 5, 5])).to.deep.equal(4);
        });   
    });
});