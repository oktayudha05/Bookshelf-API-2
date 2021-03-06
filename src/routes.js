import {addBookHandler, getAllBooks, getBookById, updateBook, deleteBook} from './handler.js'

const routes = [
    {
        method : 'POST',
        path : '/books',
        handler : addBookHandler
    },
    {
        method : 'GET',
        path : '/books',
        handler : getAllBooks
    },
    {
        method : 'GET',
        path : '/books/{bookId}',
        handler : getBookById
    },
    {
        method : 'PUT',
        path : '/books/{bookId}',
        handler : updateBook
    },
    {
        method : 'DELETE',
        path : '/books/{bookId}',
        handler : deleteBook
    },

]

export {routes}