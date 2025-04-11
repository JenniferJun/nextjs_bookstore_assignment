import Books from "../../components/book_list";
import Genre, { IGenreProps } from "../../components/genre";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getGenres() {
  const API_URL = "https://books-api.nomadcoders.workers.dev/lists";
  const response = await fetch(API_URL);
  const json = await response.json();
  const sortedData = json["results"].sort((a, b) => a.numberValue - b.numberValue)
  return sortedData;
}

export default async function HomePage() {
  return (
    <>
      <Generes />
    </>
  );
}

export async function Generes({ id }: { id?: string }) {
  const genres = await getGenres();
  if (id === undefined) id = genres[0].list_name_encoded;
  return (
    <div className={styles.container}>
      <h1>The New York Times Best Seller Explorer</h1>
      <div className={styles.store}>
        <div className={styles.list}>
          {genres.map((genre: IGenreProps) => (
            <Genre
              key={genre.list_name_encoded}
              list_name={genre.list_name}
              display_name={genre.display_name}
              list_name_encoded={genre.list_name_encoded}
              oldest_published_date={genre.oldest_published_date}
              newest_published_date={genre.newest_published_date}
              updated={genre.updated}
              selected_id={id}
            />

          ))}
        </div>
        <div className={styles.content}>
          <Books id={id} />
        </div>
      </div></div>

  );
}