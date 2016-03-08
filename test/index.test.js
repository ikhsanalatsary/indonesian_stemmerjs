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

	describe('remove particle', function(){
		describe('should remove the particles at the end of the word', function() {
			it("'kah'", function() {
				Stemmer.removeParticle('manakah').should.equal('mana');
			});

			it("'lah'", function() {
				Stemmer.removeParticle('kembalilah').should.equal('kembali');
			});

			it("'pun'", function() {
				Stemmer.removeParticle('bagaimanapun').should.equal('bagaimana');
			});
		});
		describe('should not remove the particles at the rest part of the word', function() {
			it("'kah", function() {
				Stemmer.removeParticle('kahak').should.equal('kahak');
				Stemmer.removeParticle('pernikahan').should.equal('pernikahan');
			});

			it("'lah", function() {
				Stemmer.removeParticle('lahiriah').should.equal('lahiriah');
				Stemmer.removeParticle('kelahiran').should.equal('kelahiran');
			});

			it("'pun", function() {
				Stemmer.removeParticle('punya').should.equal('punya');
				Stemmer.removeParticle('kepunyaan').should.equal('kepunyaan');
			});
		});
	});
});