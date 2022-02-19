import readline from 'readline-sync';

/**
 * Clear password keeping only accepted characters
 * @param {string} inputPassword Password for cleaning
 * @example
 *  cleanPassword('Ya3{]'); // Ya3
 */

const cleanPassword = (inputPassword) => {
	const regex = /[^a-zA-Z0-9!@#\$%\^\&*\(\)\-\+]+/g;
	return inputPassword.replace(regex, '');
};

/**
 * Tests the strength of the password, returning how
 *  many characters are left to make it a strong password
 * @param {any} password Password to be tested
 * @example
 *  challenge2('Ya3{]'); // 3
 *  challenge2('Ya3&ab'); // 0
 */

export const challenge2 = (password) => {
	console.clear();
	const passwordClean = cleanPassword(password);
	const passwordLength = passwordClean.length;
	const missingSize = passwordLength < 6 ? 6 - passwordLength : 0;
	console.log(missingSize);
	return missingSize;
};

const password = readline.question('Digite uma senha: ');
challenge2(password);
