import { describe, expect, test } from '@jest/globals';
import { challenge1 } from './desafio1';

describe('Asterisks ladder', () => {
	test(`Output:     *
	                 **
							    ***
						     ****
						    *****
					     ******`, () => {
		const result = '     *\n    **\n   ***\n  ****\n *****\n******';
		expect(challenge1(6)).toEqual(result);
	});
	test(`Output:  *
	              **
						   ***`, () => {
		const result = '  *\n **\n***';
		expect(challenge1(3)).toEqual(result);
	});
	test(`Output: *`, () => {
		const result = '*';
		expect(challenge1(1)).toEqual(result);
	});
	test('blank output', () => {
		const result = '';
		expect(challenge1(0)).toEqual(result);
	});
});
