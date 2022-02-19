import { describe, expect, test } from '@jest/globals';
import { challenge3 } from './desafio3';

describe('Anagrams in substrings of words', () => {
	test('Success with word ifailuhkqq', () => {
		expect(challenge3('ifailuhkqq')).toEqual(3);
	});
	test('Success with word ovo', () => {
		expect(challenge3('ovo')).toEqual(2);
	});
	test('Success with word oo', () => {
		expect(challenge3('oo')).toEqual(1);
	});
	test('Success with word study', () => {
		expect(challenge3('study')).toEqual(0);
	});
});
