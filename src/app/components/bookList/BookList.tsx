"use client";

import { useState, useEffect } from "react";
import Card from "./Card/Card";
import "./style.css";
import { setFilter } from "@/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { BookItem } from "@/types/book";

interface RootState {
  filters: {
    filter: string;
  };
}

export default function BookList() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filters.filter);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>();

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

  const handleGenreClick = (category: string) => {
    dispatch(setFilter(category));
  };

  useEffect(() => {
    const apiKey = "AIzaSyBr9B3Uw7C3Fi4NVVrg2ypGn2YRo7JewKU";
    const fetchDataBooks = async () => {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=Subject:${filter}&key=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setBooks(data.items || []);
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

        {!loading &&
          books.length > 0 &&
          books.map((book: BookItem) => <Card key={book.id} book={book} />)}
      </div>
    </div>
  );
}
