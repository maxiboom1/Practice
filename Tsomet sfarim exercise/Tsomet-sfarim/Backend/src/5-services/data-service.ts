import BookModel from "../2-models/book-model";
import { ResourceNotFoundError } from "../2-models/client-errors";
import dal from "../4-utils/dal";
import { OkPacket } from "mysql";

async function getAllAuthors() {
    const sql =`SELECT * FROM authors`;
    const authors = await dal.execute(sql);
    return authors;
}

async function getBooksBySearch(searchString: string) {
    
    const sql =`SELECT bookId, books.authorId, bookName, pagesCount, price, CONCAT(authors.authorFirstName, ' ', authors.authorLastName) AS authorFullName FROM books
    JOIN authors
    ON books.authorId = authors.authorId
    WHERE bookName LIKE ? `;
    const books = await dal.execute(sql,['%' + searchString + '%']);
    return books;
}

async function addBook(book: BookModel) {
    
    const sql = "INSERT INTO books VALUES(DEFAULT, ?, ?, ?, ?)";    
    
    const result: OkPacket = await dal.execute(sql,[book.authorId, book.bookName, book.pagesCount, book.price]);
    
    book.bookId = result.insertId;

    return book;

}

async function deleteBook(bookId: number) {
    
    const sql = "DELETE FROM books WHERE bookId = ?";    
    
    const result:OkPacket = await dal.execute(sql,[bookId]);

    if (result.affectedRows === 0) throw new ResourceNotFoundError(bookId);
    
}


export default {
    getAllAuthors,
    getBooksBySearch,
    addBook,
    deleteBook
};

