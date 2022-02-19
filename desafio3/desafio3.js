import readline from 'readline-sync';

/**
 * Counts how many anagrams are in the substrings
 * @param {array} characterArray character array
 * @returns Number of anagrams
 */
 
const countAnagrams = (characterArray) => {
	const arrayLength = characterArray.length - 1;
	let numberOfAnagrams = 0;

	for (let i = 0; i < arrayLength; i++)
		for (let j = arrayLength; j > i; j--)
			if (characterArray[i] == characterArray[j])
				if (j == i + 1) numberOfAnagrams++;
				else if (j > i + 1) numberOfAnagrams += 2;

	return numberOfAnagrams;
};

/**
 * Receives string and returns how many anagrams it contains
 * @param {string} word Input word to analyze if it contains anagrams
 * @example
 *  challenge3('ifailuhkqq'); // 3
 *  challenge3('ovo'); // 2
 */

export const challenge3 = (word) => {
	console.clear();
	const wordInArray = word.split('');
	const numberOfAnagrams = countAnagrams(wordInArray);
	console.log(numberOfAnagrams);
	return numberOfAnagrams;
};


const hasAnagrams = readline.question('Digite uma string: ');
challenge3(hasAnagrams);
