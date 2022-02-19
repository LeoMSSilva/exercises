import readline from 'readline-sync';

/**
 * Create array (array with strings)
 * @param {number} n matrix dimensions
 * @returns the filled matrix
 */

const mountArray = (n) => {
	let ladder = [];
	for (let i = 1; i <= n; i++) {
		ladder.push(' '.repeat(n - i) + '*'.repeat(i));
	}
	return ladder;
};

/**
 * Print a ladder of asterisks (array with strings)
 * @param {number} n matrix dimensions
 * @example
 *  challenge1(6) //       *
 *                //      **
 *                //     ***
 *                //    ****
 *                //   *****
 *                //  ******
 *  challenge1(3) //    *
 *                //   **
 *                //  ***
 */

export const challenge1 = (n) => {
	console.clear();
	const ladder = mountArray(n);
	const ladderString = ladder.join('\n');
	console.log(ladderString);
	return ladderString;
};

const n = readline.question('Digite o valor de n: ');
challenge1(Number(n));
