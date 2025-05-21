"use strict";

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let number of arr) {
		if (number > max) {
			max = number;
		}
		if (number < min) {
			min = number;
		}
		sum += number;
	}

	const avg = (sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: +avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let number of arr) {
		if (number % 2 === 0) {
			sumEvenElement += number;
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (maxWorkerResult < result) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}