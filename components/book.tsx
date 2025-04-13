import Link from "next/link";
import styles from "../styles/books.module.css";

export interface IBookProps {
  rank: number,
  publisher: string,
  primary_isbn13: string,
  description: string,
  price: number,
  title: string,
  author: string,
  contributor: string,
  book_image: string,
  book_image_width: string,
  book_image_height: string,
  amazon_product_url: string,
}

export default function Book({ title, amazon_product_url, book_image, author, description }: IBookProps) {
  return (
    <div className={styles.book}>
      <img src={book_image} alt={title} />
      <span className={styles.bookh1}>{title} </span>
      <h2>Author: {author}</h2>
      <h2>{description}</h2>

      <Link href={`${amazon_product_url}`}>
        <span className={styles.buynow}>Buy now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
        </span>
      </Link>
    </div>

  );
}
