import { Generes } from "../../(home)/page";
import Books from "../../../components/book_list";
import styles from "../../../styles/home.module.css";

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

interface IParams {
  params: { id: string };
}

async function getGenres() {
  const response = await fetch(API_URL);
  const json = await response.json();
  const sortedData = json["results"].sort((a, b) => a.numberValue - b.numberValue)
  return sortedData;
}

export default async function GenrePage({ params: { id } }: IParams) {
  const genres = await getGenres();
  return (
    <div className={styles.container}>
      <Generes id={id} />
    </div>
  );
}
