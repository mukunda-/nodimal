import { describe } from 'ava-spec';

const randomAnimal = require('../../build/index.js').randomAnimal;

describe( 'random animal', async it => {
	it( 'gets a string', t => t.is( 'string', typeof randomAnimal() ));
})
