"use client";
import React from "react";
import Item from "../components/itemInCart/itemInCart";
import style from "./style.module.css";
import { cartItems } from "@/slices/cartSlice";
import { useSelector } from "react-redux";
import { selectToken } from "@/slices/authSlice";
import { BookItem } from "@/types/book";

export default function Cart() {
  const cart = useSelector(cartItems);
  const token = useSelector(selectToken);

  if (!token) {
    return <p>You are not signed up!</p>;
  }

  const totalAmount = cart.reduce((total: number, item: BookItem) => {
    if (
      item.saleInfo &&
      item.saleInfo.retailPrice &&
      item.saleInfo.retailPrice.amount &&
      item.count
    ) {
      return total + item.saleInfo.retailPrice.amount * item.count;
    }
    return total;
  }, 0);

  return (
    <div className={style.container}>
      <h2 className={style.heading}>SHOPPING CART</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <th
              style={{
                width: "450px",
              }}
            >
              ITEM
            </th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>DELIVERY</th>
          </tr>
        </thead>{" "}
        <tbody>
          {cart.length === 0 ? (
            <p>No items in your cart</p>
          ) : (
            cart.map((item: BookItem) => <Item key={item.id} book={item} />)
          )}
        </tbody>
      </table>
      <div className={style.checkoutWrapper}>
        {" "}
        <p>Total Amount: {totalAmount.toFixed(2)}</p>
        <button className={`buttons ${style.checkout}`}>CHECKOUT</button>
      </div>
    </div>
  );
}
