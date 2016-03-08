'use strict';

var _ = require('lodash');
var isEndsWith = require('./indonesian_stemmerjs/stemmer_utility.js').isEndsWith;

var vowel = ['a', 'e', 'i', 'o', 'u'];
var particleChars = ['kah', 'lah', 'pun'];
var numberOfSyllables;

function totalSyllables (word) {
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		if (isVowel(word[i])) {
			result++; 
		}
	};

  return result;
}

function removeParticle(word) {
  numberOfSyllables = numberOfSyllables || totalSyllables(word);

  particleChars.forEach(function(char) {
    if(isEndsWith(word, word.length, char)) {
      numberOfSyllables -= 1;
      word = word.slice(0, -3);
    }
  });

  return word;
}

function isVowel (character) {
	return _.includes(vowel, character);
}

module.exports = {
	totalSyllables: totalSyllables, 
  removeParticle: removeParticle
}