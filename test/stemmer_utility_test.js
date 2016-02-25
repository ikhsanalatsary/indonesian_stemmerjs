'use strict';

var stemmerUtility = require('./../lib/indonesian_stemmerjs/stemmer_utility.js');

module.exports = function (expect, should) {
  describe('Stemmer Utility', function() {
    it('should work!', function() {
      expect(true).to.be.true;
    });

    before(function() {
      this.word = 'asldkamsdo';
    });

    describe('the word starts with prefix', function() {
      it('that have different letters from the prefix should return false', function() {
        stemmerUtility.isStartsWith(this.word, 3, 'ber').should.be.false;
      });
    });

    describe('that have the same letters with the word\'s first letters', function() {
      before(function() {
        this.prefix = 'asld';
      });

      it('by exactly prefix length should be true', function() {
        stemmerUtility.isStartsWith(this.word, this.prefix.length, this.prefix).should.be.true;
      });

      it('by more than prefix length should still be true', function() {
        stemmerUtility.isStartsWith(this.word, this.prefix.length+1, this.prefix).should.be.true;
      });

      it('by less than prefix length should still be false', function() {
        stemmerUtility.isStartsWith(this.word, this.prefix.length-1, this.prefix).should.be.false;
      });
    });

    describe('the word ends with suffix', function() {
      it('that have different letters from the suffix should return false', function() {
        stemmerUtility.isEndsWith(this.word, 3, 'abc').should.be.false;
      });

      describe('that have the same letters with the word\'s last letters', function() {
        before(function() {
          this.suffix = 'amsdo';
        });

        it('by exactly suffix length should be true', function() {
          stemmerUtility.isEndsWith(this.word, this.suffix.length, this.suffix).should.be.true;
        });

        it('more than suffix length should be true', function() {
          stemmerUtility.isEndsWith(this.word, this.suffix.length+1, this.suffix).should.be.true;
        });

        it('less than suffix length should be false', function() {
          stemmerUtility.isEndsWith(this.word, this.suffix.length-1, this.suffix).should.be.false;
        });
      });
    });
  });
}