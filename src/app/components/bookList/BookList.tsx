"use client";

import { useState, useEffect } from "react";
import Card from "./Card/Card";
import "./style.css";
import { setFilter } from "@/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BookList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filter);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryArray = [
    "Architecture",
    "Art & Fashion",
    "Biography",
    "Business",
    "Crafts & Hobbies",
    "Drama",
    "Fiction",
    "Food & Drink",
    "Health & Wellbeing",
    "History & Politics",
    "Humor",
    "Poetry",
    "Psychology",
    "Science",
    "Technology",
    "Travel & Maps",
  ];

  const handleGenreClick = (category) => {
    dispatch(setFilter(category));
  };

  useEffect(() => {
    const fetchDataBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/books?subject=${filter}&page=1`);
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data.items);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    if (filter) {
      fetchDataBooks();
    }
  }, [filter]);

  return (
    <div className="main__books">
      <div className="main__books-sorting">
        <ul>
          {categoryArray.map((genre) => (
            <li
              key={genre}
              className={`main__books-genre ${
                genre === filter ? "active" : ""
              }`}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <div className="main__books-options">
        {loading && <p>Loading books...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          books.length > 0 &&
          books.map((book) => <Card key={book.id} book={book} />)}
      </div>
    </div>
  );
}
