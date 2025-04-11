import Books from "../../components/book_list";
import Genre, { IGenreProps } from "../../components/genre";
import Generes from "../../components/genre_list";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <div className={styles.container}>
      <Generes />
    </div>
  );
}
