import Generes from "../../../components/genre_list";
import styles from "../../../styles/home.module.css";

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
