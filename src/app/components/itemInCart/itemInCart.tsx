import Image from "next/image";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "@/slices/cartSlice";

export default function Item({ book }) {
  const dispatch = useDispatch();

  const handleIncreasingCount = () => {
    dispatch(increaseCount({ id: book.id }));
  };

  const handleDecreasingCount = () => {
    dispatch(decreaseCount({ id: book.id }));
  };

  return (
    <tr>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Image
          src={
            book.volumeInfo.imageLinks?.smallThumbnail ||
            book.volumeInfo.imageLinks?.thumbnail
          }
          alt={book.volumeInfo.title}
          width={102}
          height={145}
        />
        <div className={style.item} style={{ width: "300px" }}>
          <h2 className={style.title}>{book.volumeInfo.title}</h2>
          <p className={style.author}>{book.volumeInfo.authors}</p>
          <div className={style.review}>
            <Image src="/icons/star.svg" alt="star" width={12} height={12} />
            <Image src="/icons/star.svg" alt="star" width={12} height={12} />
            <Image src="/icons/star.svg" alt="star" width={12} height={12} />
            <Image src="/icons/star.svg" alt="star" width={12} height={12} />
            <Image src="/icons/star.svg" alt="star" width={12} height={12} />
            <p>
              {" "}
              {book.ratingCount && book.ratingCount.rating
                ? book.ratingCount.rating
                : ""}{" "}
              reviews
            </p>
          </div>
        </div>
      </td>
      <td>
        <button className={style.countBtn}>
          <span onClick={handleDecreasingCount}>
            <svg
              width="22"
              height="25"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2143 12.5C21.2143 13.3643 20.5121 14.0625 19.6429 14.0625H2.35714C1.48795 14.0625 0.785713 13.3643 0.785713 12.5C0.785713 11.6357 1.48795 10.9375 2.35714 10.9375H19.6429C20.5121 10.9375 21.2143 11.6357 21.2143 12.5Z"
                fill="black"
              />
            </svg>
          </span>{" "}
          {book.count}
          <span onClick={handleIncreasingCount}>
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3.75C9 2.92031 9.67031 2.25 10.5 2.25C11.3297 2.25 12 2.92031 12 3.75V10.5H18.75C19.5797 10.5 20.25 11.1703 20.25 12C20.25 12.8297 19.5797 13.5 18.75 13.5H12V20.25C12 21.0797 11.3297 21.75 10.5 21.75C9.67031 21.75 9 21.0797 9 20.25V13.5H2.25C1.42031 13.5 0.75 12.8297 0.75 12C0.75 11.1703 1.42031 10.5 2.25 10.5H9V3.75Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
      </td>
      <td>
        <p className={style.price}>
          {" "}
          {book.saleInfo && book.saleInfo.retailPrice
            ? (book.saleInfo.retailPrice.amount * book.count).toFixed(2) +
              book.saleInfo.retailPrice.currencyCode
            : "none"}
        </p>
      </td>
      <td>
        <p className={style.delivery}>Shipping: delivery </p>
      </td>
    </tr>
  );
}
