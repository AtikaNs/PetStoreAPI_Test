// Welcome test

const assert = require('chai').assert;
const app = require('../../assert')

// Asserting using chai
describe('Welcome Test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(),"Welcome to PetStore test")
    })
})