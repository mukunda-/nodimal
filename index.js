// nodimal v1.0.0 by Mukunda Johnson
// A Very Useful Software

// ANIMAL LIST IMPLEMENTATION
const animals = [
	'dog', 'cat', 'goat'
];

const randomPick = source => source[Math.floor(Math.random() * source.length)];

function randomAnimal() { return randomPick( animals ); }

module.exports = { randomAnimal };

