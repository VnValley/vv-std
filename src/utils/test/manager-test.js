var Manager     = require('./../manager');
var mocha       = require('mocha');
var expect      = require('chai').expect;
var it          = mocha.it;
var describe    = mocha.describe;

describe('Manager', function () {

    var manager = new Manager()
        .extends('foo', 'bar')
        .extends('hello', 'world')
        .setDefaultDriver('foo');

    describe('extended and retrieve driver', function () {
        it('should be correctly', function () {
            expect(manager.driver('foo')).to.be.equal('bar');
        });
        it('should throw unsupported driver exception when incorrect driver alias was passed', function () {
            var fn = function () {
                return manager.driver('not existed');
            };

            expect(fn).to.throw('Driver [not existed] is not supported')
        });
        it('should get correct default driver when no alias parameter was passed', function () {
            expect(manager.driver()).to.be.equal('bar');
        });
    });

    describe('check the driver existence', function () {
        it('should be true if the driver is existed', function () {
            //noinspection BadExpressionStatementJS
            expect(manager.has('foo')).to.be.true;
            //noinspection BadExpressionStatementJS
            expect(manager.has('hello')).to.be.true;
            //noinspection BadExpressionStatementJS
            expect(manager.has('not existed')).to.be.false;
        })
    })
});