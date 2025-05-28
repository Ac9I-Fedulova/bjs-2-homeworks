'use strict';

function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		console.log(`${this.name} отчислен.`);
		return;
	}
	if (!!marksToAdd.length) {
		this.marks.push(...marksToAdd);
	}
	return;
}

Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) {
		return 0;
	}
	const totalScore = this.marks.reduce((acc, score) => acc + score, 0);
	return totalScore / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}