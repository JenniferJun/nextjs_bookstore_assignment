import Books from "../components/book_list";
import Genre, { IGenreProps } from "../components/genre";
import styles from "../styles/home.module.css";

async function getGenres() {
  const API_URL = "https://books-api.nomadcoders.workers.dev/lists";
  const response = await fetch(API_URL);
  const json = await response.json();
  const sortedData = json["results"].sort((a, b) => a.numberValue - b.numberValue)
  return sortedData;
}

export default async function Generes({ id, name }: { id?: string, name?: string }) {
  const genres = await getGenres();
  if (id === undefined) id = genres[0].list_name_encoded;
  if (name === undefined) name = genres.find(item => item.list_name_encoded === id).display_name;
  return (
    <>
      <h1>The New York Times Best Seller</h1><h3>{name}</h3>
      <div className={styles.store}>
        <nav className={styles.list}>
          <ul>
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
          </ul>
        </nav>
        <div className={styles.content}>
          <Books id={id} />
        </div>
      </div></>

  );
}