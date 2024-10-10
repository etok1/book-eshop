"use client";
import React, { useEffect } from "react";
import Item from "../components/itemInCart/itemInCart";
import style from "./style.module.css";
import { cartItems } from "@/slices/cartSlice";
import { useSelector } from "react-redux";
import { selectToken } from "@/slices/authSlice";

export default function Cart() {
  const cart = useSelector(cartItems);
  const token = useSelector(selectToken);

  if (!token) {
    return <p>You are not signed up!</p>;
  }

  return (
    <div className={style.container}>
      <h2 className={style.heading}>SHOPPING CART</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>DELIVERY</th>
          </tr>
        </thead>{" "}
        <tbody>
          {cart.length === 0 ? (
            <p>No items in your cart</p>
          ) : (
            cart.map((item) => <Item key={item.id} book={item} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
