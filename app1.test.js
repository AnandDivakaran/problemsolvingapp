const chai = require('chai');
const expect = chai.expect;

const anagramValidation = require('./app1');

describe('anagram validation', () => {
    context('anagramValidation', () => {
        it('should return true when both inputs are null', () => {
            expect(anagramValidation(null, null)).to.be.true;
        });

        it('should return true when both inputs are empty', () => {
            expect(anagramValidation('', '')).to.be.true;
        });        

        it('should return false when first input is null and second input is not null', () => {
            expect(anagramValidation(null, 'xxx')).to.be.false;
        });  

        it('should return false when first input is not null and second input is null', () => {
            expect(anagramValidation('xxx', null)).to.be.false;
        });      
        
        it('should return true when both input strings are an exact not null match', () => {
            expect(anagramValidation('xxx', 'xxx')).to.be.true;
        });             

        it('should return false when both input strings have nothing in common', () => {
            expect(anagramValidation('xxx', 'yyy')).to.be.false;
        });        
        
        it('should return false when both input strings are not null and of different length', () => {
            expect(anagramValidation('xxx', 'xxxx')).to.be.false;
        });       
        
        it('should return true when both input strings are having same count of characters but in different positions', () => {
            expect(anagramValidation('aba', 'baa')).to.be.true;
        });      
        
        it('should return false when both input strings are having slightly similar characters but not exactly the same', () => {
            expect(anagramValidation('aba', 'bba')).to.be.false;
        });           
    });
});