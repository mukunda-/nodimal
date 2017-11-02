// nodimal v1.0.0 by Mukunda Johnson
// A Very Useful Software

// ANIMAL LIST IMPLEMENTATION
const animals = [
	'dog', 'cat', 'goat'
];

const randomPick = source => source[Math.floor(Math.random() * source.length)];

/**
 * Picks a random animal.
 *
 * Animal will not be a subtype of an animal. For example, "dog" is distinct, and it will not return any other dog breeds.
 *
 * @returns string
 */
function randomAnimal() { return randomPick( animals ); }

module.exports = { randomAnimal };
