"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;
	// Проверяем дискримиант и находим корни
	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyInterestRate = (percent / 100) / 12;
	const loanBody = amount - contribution;
	if (loanBody <= 0) {
		return 0;
	}
	// Вычисляем ежемесячный платеж
	const monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1)));
	// Общая сумма, которую нужно будет выплатить
	const totalAmount = monthlyPayment * countMonths;
	return +(totalAmount.toFixed(2));
}
