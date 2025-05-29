'use strict';

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		if (this.books.length === 0) return 0;
		if (typeof type !== 'string') return 0;

		const book = this.books.find((book) => book[type] === value);
		return book || null;
	}
	giveBookByName(bookName) {
		const bookIndex = this.books.findIndex((book) => book.name === bookName);
		if (bookIndex !== -1) {
			return this.books.splice(bookIndex, 1)[0];
		}
		return null;
	}
}

// Создаем библиотеку
const library = new Library('Библиотека имени Ленина');

// Создаем книги разных типов
const book1 = new NovelBook('Лев Толстой', 'Война и мир', 1919, 1087);
const book2 = new Magazine('Наука и жизнь', 2019, 45);
const book3 = new FantasticBook('Жюль Верн', 'Двадцать тысяч лье под водой', 1967, 384);

// Добавляем книги в библиотеку
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Находим книгу, изданную в 1919 году. Если такой книги нет — создаём и добавляем
let findBook = library.findBookBy('releaseDate', 1919);
if (findBook) {
	console.log('Найдено:', findBook.name);
} else {
	let findBook = new Book('Василий Шульгин', '1919 год', 1919, 900);
	library.addBook(findBook);
	console.log('Добавлена новая книга 1919 года:', findBook.name);
}

// Выдаем любую книгу 
const issuedBook = library.giveBookByName('Наука и жизнь');
console.log('Выданная книга:', issuedBook);
console.log('Оставшиеся в библиотеке книги:', library.books);

// Повреждаем выданную книгу
if (issuedBook) {
	issuedBook.state = 40;
	console.log(`Состояние книги после повреждения: ${issuedBook.state}`);
}

// Восстанавливаем книгу
if (issuedBook) {
	issuedBook.fix();
	console.log(`Состояние книги после восстановления: ${issuedBook.state}`);
}

// Пытаемся добавить восстановленную книгу обратно в библиотеку
library.addBook(issuedBook);
console.log('Книги в библиотеке после попытки вернуть книгу:', library.books);