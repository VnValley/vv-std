var mocha    = require('mocha');
var it       = mocha.it;
var describe = mocha.describe;
var expect   = require('chai').expect;

describe('Test true', function () {
    it('should be true', function () {
        expect(true).to.be.true;
    })
});