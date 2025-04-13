import Generes from "../../../components/genre_list";
import styles from "../../../styles/home.module.css";

interface IParams {
  params: { id: string };
}

export default async function GenrePage({ params: { id } }: IParams) {
  return (
    <div className={styles.container}>
      <h1>The New York Times Best Seller</h1>
      <Generes id={id} />
    </div>
  );
}
