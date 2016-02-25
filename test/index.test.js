'use strict';

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var stemmerUtilityTest = require('./stemmer_utility_test.js');
var Stemmer = require('./../lib/index.js');

stemmerUtilityTest(expect, should);

describe('Stemmer', function() {
	it('should work!', function() {
		expect(true).to.be.true;
	});

	describe('total syllables', function() {
		it("'memasak' should return 3", function() {
			Stemmer.totalSyllables('memasak').should.equal(3);
		});

		it("'mewarnai' should return 4", function() {
			Stemmer.totalSyllables('mewarnai').should.equal(4);
		});

		it("'permainan' should return 4", function() {
			Stemmer.totalSyllables('permainan').should.equal(4);
		});
	});
});