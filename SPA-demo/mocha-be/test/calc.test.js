var add = require('../calc');
var expect = require('chai').expect;

describe('加法函数的单元测试',function() {
    it('a + b = NaN',function() {
        expect(isNaN(add('a','b'))).to.be.ok;
    });
    it('1 + 1 = 2',function() {
        expect(add(1,1)).to.be.equal(2);
    })
})