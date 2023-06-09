Fullstack exercise - Tzomet sfarim site (**mySql, nodeJs, angular**):

To create a website for "Book Junction," you need to follow these steps:

1. Database creation:
   - Create a new database in MySQL with the following tables:
     - A table of authors that contains:
       - Author ID (primary key, auto-incremented)
       - First name
       - Last name
     - A table of books that contains:
       - Book ID (primary key, auto-incremented)
       - Author ID (foreign key linked to the authors table)
       - Book title
       - Number of pages
       - Book price
   - Enter several records into the tables using the database interface.

2. Backend project creation:
   - Create a Node.js project containing a RESTful service that exposes the following routes:
     - Retrieve all authors.
     - Receive a search string and return all books whose title contains the search string (contains). All book attributes should be returned, including the author's full name, not just the author ID.
     - Add a new book.
     - Delete an existing book.
   - Check that all routes work as required using Postman.

3. Creating the Frontend Project:
   - Create a new Angular project that includes:
     - A layout that contains:
       - A title
       - The above logo of the book network
       - A menu for the different pages
       - A main area for the pages' content
     - A home page that contains:
       - An explanatory paragraph about the site
       - An image related to books
     - A page that allows searching and displays search results:
       - A text box for searching books.
       - A button to perform the search. Upon clicking it, a table or tabs should be displayed containing all the books whose name contains the search string. Each book displayed should also show the author's full name.
     - A page for adding a new book that includes:
       - A form that allows adding a new book, including a Select box to choose the author, a box for the book's name, a box for the number of pages, and a box for the book's price.
       - Validation on the form fields:
         - All fields are mandatory.
         - The number of pages must be between 5 and 1000.
         - The price must be between 0 and 1000.
     - The ability to delete an existing book.
     - Add aesthetic design of your choice for the entire site.

    
