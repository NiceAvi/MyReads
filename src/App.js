import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchBooks from './components/SearchBooks';

const App = () => {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [changed, setChanged] = useState(false);

  useEffect(
    () => {
      const fetchBooks = async () => {
        const books = await BooksAPI.getAll();
        const currently_reading_books = books.filter(
          (book) => book.shelf === 'currentlyReading'
        );
        setCurrentlyReading(currently_reading_books);
        const want_to_read_books = books.filter(
          (book) => book.shelf === 'wantToRead'
        );
        setWantToRead(want_to_read_books);
        const read_books = books.filter((book) => book.shelf === 'read');
        setRead(read_books);
      };

      fetchBooks();
    },
    [changed]
  );

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setChanged(!changed);
  };
  return (
    <div className="app">
      {
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                changeShelf={changeShelf}
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
              />
            }
          />
          <Route
            path="/search"
            exact
            element={
              <SearchBooks
                changeShelf={changeShelf}
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
              />
            }
          />
        </Routes>
      }
    </div>
  );
};

export default App;