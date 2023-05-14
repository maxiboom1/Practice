class BookModel{
    public bookId: number;
    public authorId: number;
    public bookName: string;
    public pagesCount: number;
    public price: number;  

    // Extra data from server:
    public authorFullName: string;
    
}

export default BookModel;