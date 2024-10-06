import style from "./page.module.css";
import { Slideshow } from "./components/home/slider/slider";
import BookList from "./components/bookList/BookList";

export default function Home() {
  return (
    <div className={style.main}>
      {" "}
      <Slideshow />{" "}
      <section className={style.mainSection}>
        <BookList />
      </section>
    </div>
  );
}
