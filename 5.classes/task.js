class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
}

fix() {
    this._state *= 1.5;
}

set state(num) {
    if (num > 0) {
        this._state = 0;
    }
    if (num < 100) {
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
    constructor(type, name, releaseDate, pagesCount) {
        super(type, name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(type, name, releaseDate, pagesCount, author) {
        super(type, name, releaseDate, pagesCount, author);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(type, name, releaseDate, pagesCount, author) {
        super(type, name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(type, name, releaseDate, pagesCount, author) {
        super(type, name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(type, name, releaseDate, pagesCount, author) {
        super(type, name, releaseDate, pagesCount, author);
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
            return this.books.push(book);
        }
    }
    //findBookBy(type, value) {
        //if (typeof findBookBy === book) {
            //return this.books.push(book);
        }
       // else {
            //return null;
        }
    //giveBookByName(bookName) {
        //if (typeof giveBookByName === book) {
            //return this.books.push(book);
        }
        //else {
            //return null;
        }
    }

