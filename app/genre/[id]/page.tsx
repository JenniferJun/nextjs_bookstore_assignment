import { Generes } from "../../(home)/page";
import Books from "../../../components/book_list";
import styles from "../../../styles/home.module.css";

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

interface IParams {
  params: { id: string };
}

export default async function GenrePage({ params: { id } }: IParams) {
  return (
    <div className={styles.container}>
      <Generes id={id} />
    </div>
  );
}
