import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
