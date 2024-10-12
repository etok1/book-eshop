import React, { useState, useEffect } from "react";
import "../style.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "@/slices/authSlice";
import { addItem, cartItems, removeItem } from "@/slices/cartSlice";
import { BookItem } from "@/types/book";

interface Book {
  book: BookItem;
}

export default function Card({ book }: Book) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const token = useSelector(selectToken);

  const cart = useSelector(cartItems);
  const dispatch = useDispatch();
  const itemInCart = cart.find((item) => item.id === book.id);

  const handleACtionCart = () => {
    if (itemInCart) {
      dispatch(removeItem(book));
    } else {
      dispatch(addItem(book));
    }
  };
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  return (
    <div className="main__books-option">
      <Image
        className="main__books-cover"
        src={
          book.volumeInfo.imageLinks?.smallThumbnail ||
          book.volumeInfo.imageLinks?.thumbnail
        }
        alt={book.volumeInfo.title}
        width={212}
        height={300}
      />
      <div className="main__books-book">
        <p>{book.volumeInfo.authors}</p>
        <h1>{book.volumeInfo.title}</h1>
        <div className="main__books-review">
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <p>
            {book.ratingCount && book.ratingCount.rating
              ? book.ratingCount.rating
              : ""}
            reviews
          </p>
        </div>
        <h2 className="main__books-annotation">
          {book.searchInfo?.textSnippet}
        </h2>
        <p className="main__books-price">
          {" "}
          {book.saleInfo && book.saleInfo.retailPrice
            ? book.saleInfo.retailPrice.amount.toFixed(2) +
              book.saleInfo.retailPrice.currencyCode
            : ""}
        </p>
        <button
          className={`buttons ${itemInCart ? "clicked" : ""}`}
          onClick={handleACtionCart}
          disabled={!isLoggedIn}
        >
          {itemInCart ? "in the cart" : "buy now"}
        </button>
      </div>
    </div>
  );
}
