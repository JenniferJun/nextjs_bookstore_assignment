"use client";

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

export default function Book({ title, amazon_product_url, book_image, author }: IBookProps) {
  return (
    <div className={styles.book}>
      <img src={book_image} alt={title} />
      <Link href={`${amazon_product_url}`}>{title} by {author}</Link>

    </div>
  );
}
