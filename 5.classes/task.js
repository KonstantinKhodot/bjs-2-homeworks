class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
}

fix() {
    this.state *= 1.5;
}

set state(num) {
    if (num < 0) {
        this._state = 0;
    }
    if (num > 100) {
        this._state = 100;
    }
    else {
        this._state = num;
    }
}

get state() {
    return this._state;
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
    constructor(name, books) {
		this.name = name;
        this.books = [];
		this.books[i][type] === value;
        if (books.state | type) {
            return this.books.push(books);
    }
    addBook(book) {
        if (book.state > 30) 
        this.books.push(book);
    }

    findBookBy(type, value) {
        if (typeof findBookBy === book) {
            return this.books.push(book);
        }
        else {
            return null;
        }
    giveBookByName(bookName) {
        this.name = name;
		this.books[i].name === bookName;
        const index = this.books.findIndex(
            (book) =>book.bookName === bookName
        );
    }
        else {
            return null;
        }
        else {
            return this.books.splice(index, 1) [0];
        }
    }

