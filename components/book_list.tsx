import Book, { IBookProps } from "./book";
import styles from "../styles/books.module.css";

export async function getBooks(id: string) {
  const API_URL = "https://books-api.nomadcoders.workers.dev/list"
  const response = await fetch(`${API_URL}?name=${id}`);
  const json = await response.json();
  return json["results"];
}

export default async function Books({ id }: { id: string }) {
  const books = await getBooks(id);
  const booksInfo = books["books"];
  return (
    <>
      <div className={styles.books}>
        {booksInfo.map((book: IBookProps) => (
          <Book
            key={book.primary_isbn13}
            rank={book.rank}
            publisher={book.publisher}
            primary_isbn13={book.primary_isbn13}
            description={book.description}
            price={book.price}
            title={book.title}
            author={book.author}
            contributor={book.contributor}
            book_image={book.book_image}
            book_image_width={book.book_image_width}
            book_image_height={book.book_image_height}
            amazon_product_url={book.amazon_product_url}
          />

        ))}

      </div>
    </>

  );
}
