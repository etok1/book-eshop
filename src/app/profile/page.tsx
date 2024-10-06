"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import style from "./style.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { selectToken } from "@/slices/authSlice";

export default function Profile() {
  const token = useSelector(selectToken);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  return (
    <div className={style.container}>
      <h2 className={style.heading}>PROFILE</h2>
      <div className={style.wrapper}>
        <div className={style.username}>
          <Image src="/images/user.png" alt="user" width={235} height={235} />
          <form className={style.userForm} action="#">
            <label htmlFor="#">YOUR NAME</label>
            <input type="text" value="John" />
            <label htmlFor="#">YOUR NAME</label>
            <input type="text" value="example" />
            <button className="button">EDIT PROFILE</button>
          </form>
        </div>
        <div className={style.about}>
          <h3>ABOUT ME</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante
            consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus
            quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla
            ac varius.
          </p>
        </div>
      </div>
    </div>
  );
}
