class BookModel{
    public bookId: number;
    public authorId: number;
    public bookName: string;
    public pagesCount: number;
    public price: number;


    public constructor (book: BookModel){
        this.bookId = book.bookId;
        this.authorId = book.authorId;
        this.bookName = book.bookName;
        this.pagesCount = book.pagesCount;
        this.price = book.price;
    }
     
}

export default BookModel;