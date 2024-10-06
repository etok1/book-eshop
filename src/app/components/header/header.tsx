import React, { useState } from "react";
import { useSelector } from "react-redux";

import style from "./style.module.css";
import Link from "next/link";
import Cart from "@/app/images/icons/cart.svg";
import User from "@/app/images/icons/user.svg";
import { selectToken } from "@/slices/authSlice";
import InputProfile from "../inputProfile/inputProfile";
import { cartItems } from "@/slices/cartSlice";

export default function Header() {
  const token = useSelector(selectToken);
  const cart = useSelector(cartItems);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
    if (token) {
      setClicked(false);
    }
  };

  return (
    <header className={`${style.header} container`}>
      <div className={style.header__logo}>
        <h1 className={style.header__logoName}>bookshop</h1>
      </div>
      <div className={style.header__nav}>
        <ul className={style.header__navList}>
          <li>
            <Link className={`${style.header__navLink} active`} href="/">
              books
            </Link>
          </li>
          <li>
            <Link className={style.header__navLink} href="#">
              audiobooks
            </Link>
          </li>
          <li>
            <Link className={style.header__navLink} href="#">
              Stationery & gifts
            </Link>
          </li>
          <li>
            <Link className={style.header__navLink} href="#">
              blog
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.header__menu}>
        <div className={style.header__userLogin}>
          <Link href={token ? "/profile" : "#"} onClick={handleClick}>
            <User />
          </Link>{" "}
          {clicked && <InputProfile />}
        </div>
        <Link href="/cart" className={style.header__menuCart}>
          <Cart />
          <span className={style.header__count}>{cart.length}</span>
        </Link>
      </div>
    </header>
  );
}
