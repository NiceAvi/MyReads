import React from "react";

const Book = (props) => {
  let thumb =
    props.book.hasOwnProperty("imageLinks") &&
    props.book.imageLinks.hasOwnProperty("smallThumbnail")
      ? props.book.imageLinks.smallThumbnail
      : "";
  let book_title = props.book.hasOwnProperty("title") ? props.book.title : "";
  let book_author = props.book.hasOwnProperty("authors")
    ? props.book.authors
    : "";
  let shelf_value;

  props.book.hasOwnProperty("shelf")
    ? (shelf_value = props.book.shelf)
    : (shelf_value = "none");

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${thumb}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            default_value={shelf_value}
            onChange={(e) => {
              props.changeShelf(props.book, e.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book_title}</div>
      <div className="book-authors">{book_author}</div>
    </div>
  );
};

export default Book;
