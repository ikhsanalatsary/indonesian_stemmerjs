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
		describe('should remove these particles at the end of the word', function() {
			it("'kah'", function() {
				shouldTransform(Stemmer.removeParticle,'manakah', 'mana');
			});

			it("'lah'", function() {
				shouldTransform(Stemmer.removeParticle,'kembalilah', 'kembali');
			});

			it("'pun'", function() {
				shouldTransform(Stemmer.removeParticle, 'bagaimanapun', 'bagaimana');
			});
		});
		describe('should not remove these particles at the rest part of the word', function() {
			it("'kah", function() {
				shouldNotTransform(Stemmer.removeParticle, 'kahak');
				shouldNotTransform(Stemmer.removeParticle, 'pernikahan');
			});

			it("'lah", function() {
				shouldNotTransform(Stemmer.removeParticle, 'lahiriah');
				shouldNotTransform(Stemmer.removeParticle, 'kelahiran');
			});

			it("'pun", function() {
				shouldNotTransform(Stemmer.removeParticle, 'punya');
				shouldNotTransform(Stemmer.removeParticle, 'kepunyaan');
			});
		});
	});

	describe('remove possesive pronoun', function(){
		describe('should remove these possessive pronouns at the end of the word', function() {
			it("'ku'", function() {
				shouldTransform(Stemmer.removePossesive, 'mainanku', 'mainan');
			});

			it("'mu'", function() {
				shouldTransform(Stemmer.removePossesive, 'gelasmu', 'gelas');
			});

			it("'nya'", function() {
				shouldTransform(Stemmer.removePossesive, 'mobilnya', 'mobil');
			});
		});

		describe('should not remove these possessive pronouns at the rest part of the word', function() {
			it("'ku", function() {
				shouldNotTransform(Stemmer.removePossesive, 'kumakan');
				shouldNotTransform(Stemmer.removePossesive, 'kekurangan');
			});

			it("'mu", function() {
				shouldNotTransform(Stemmer.removePossesive, 'murahan');
				shouldNotTransform(Stemmer.removePossesive, 'kemurkaan');
			});

			it("'nya", function() {
				shouldNotTransform(Stemmer.removePossesive, 'nyapu');
				shouldNotTransform(Stemmer.removePossesive, 'menyambung');
			});
		});
	});
});

function shouldTransform(methodName, word, transformedWord) {
	methodName(word).should.equal(transformedWord);
}

function shouldNotTransform(methodName, word) {
	methodName(word).should.equal(word);
}