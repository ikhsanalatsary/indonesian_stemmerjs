'use strict';

const fs = require('fs'),
   _path = require('path'),
   set_const = require("node-constants").definer();

var SPECIAL_LETTERS = ['K', 'P', 'N', 'R'];

function load_words (filename, chopped) {
	chopped = chopped || false;
	 // Syncronous
	let file = path(filename);
	let contents = fs.readFileSync(file, 'utf-8').split('\n');
	if (chopped) return contents.map((word) => word.substring(1, -1));

	return contents;
}

function path(filename) {
	let path = _path.join(__dirname, 'irregular_words', filename);

	return path;
}

SPECIAL_LETTERS.forEach((letter) => set_const(`BEGINS_WITH_${letter}`, load_words(`${letter.toLowerCase()}.txt`, true)));

// console.log(load_words('pun.txt', true));