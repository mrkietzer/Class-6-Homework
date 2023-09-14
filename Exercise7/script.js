//Library needs to store book objects
//The Library should feature methods that allow a user to add a book, remove a book, and list all books.
class library {

}

//Book needs Private Fields for ISBN and Public for title author and yearPublished

class book {
    #isbn;
    constructor(isbn, title, author, datePublished) {
        this.#isbn = isbn;
        this.title = title;
        this.author = author;
        this.datePublished = datePublished;
    }
}

//Implement this system and run a series of operations, such as adding a book, listing books, etc.