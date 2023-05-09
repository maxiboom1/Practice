import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import BookModel from "../2-models/book-model";

const router = express.Router();

// http://localhost:4000/api/authors
router.get("/authors", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const authors = await dataService.getAllAuthors();
        response.json(authors);
    }
    catch(err: any) {
        next(err);
    }
});

// http://localhost:4000/api/booksBySearch
router.get("/booksBySearch/:searchString", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const searchString = request.params.searchString;
        const books = await dataService.getBooksBySearch(searchString);
        response.json(books);
    }
    catch(err: any) {
        next(err);
    }
});

// http://localhost:4000/api/books
router.post("/books", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const book = new BookModel(request.body);
        const addedBook = await dataService.addBook(book);
        response.status(201).json(addedBook);
    }
    catch(err: any) {
        next(err);
    }
});

// http://localhost:4000/api/books
router.delete("/books/:bookId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const bookId = +request.params.bookId
        await dataService.deleteBook(bookId);
        response.sendStatus(204);
    }
    catch(err: any) {
        next(err);
    }
});


export default router;
