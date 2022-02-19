import { describe, expect, test } from '@jest/globals';
import { challenge2 } from './desafio2';

describe('Password strength', () => {
	test('Success with word Ya3&ab', () => {
		expect(challenge2('Ya3&ab')).toEqual(0);
	});
	test('Success with word Ya3', () => {
		expect(challenge2('Ya3')).toEqual(3);
	});
	test('Success with word Ya3{]', () => {
		expect(challenge2('Ya3{]')).toEqual(3);
	});
	test('Success with word {}[]/|', () => {
		expect(challenge2('{}[]/|')).toEqual(6);
	});
});
