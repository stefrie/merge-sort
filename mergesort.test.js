'use strict';

const { mergeSort } = require('./index.js');

describe('Merge Sort', () => {
	it('should sort an array numerically', () => {
		let arr = [8, 4, 23, 42, 16, 15];
		let sortedArr = [4, 8, 15, 16, 23, 42];
		expect(sortedArr).toEqual(mergeSort(arr));
	});
});
