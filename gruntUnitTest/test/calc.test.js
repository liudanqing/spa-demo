var add = require('../calc');
var expect = require("chai").expect;

describe("加法函数的测试",function() {
    it("0 + 1 = 1", function() {
        expect(add(0,1)).to.be.equal(1)
    })
    it("1 + 1 = 2", function() {
        expect(add(1,1)).to.be.equal(2)
    })
    it("a + b = c", function() {
        expect(isNaN(add('a','b'))).to.be.ok
    })
})