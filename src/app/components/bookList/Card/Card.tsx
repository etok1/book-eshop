import "../style.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, cartItems, removeItem } from "@/slices/cartSlice";

export default function Card({ book }) {
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

  return (
    <div className="main__books-option">
      <Image
        className="main__books-cover"
        src={book.image}
        alt="book"
        width={212}
        height={300}
      />
      <div className="main__books-book">
        <p>{book.author}</p>
        <h1>{book.title}</h1>
        <div className="main__books-review">
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <Image src="/icons/star.svg" alt="star" width={12} height={12} />
          <p>{book.reviews} reviews</p>
        </div>
        <h2 className="main__books-annotation">{book.annotation}...</h2>
        <p className="main__books-price"> {book.price}</p>
        <button
          className={`button ${itemInCart ? "clicked" : ""}`}
          onClick={handleACtionCart}
        >
          {itemInCart ? "in the cart" : "buy now"}
        </button>
      </div>
    </div>
  );
}
