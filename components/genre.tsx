
import Link from "next/link";
import styles from "../styles/genre.module.css";

export interface IGenreProps {
  list_name: string,
  display_name: string,
  list_name_encoded: string,
  oldest_published_date: string,
  newest_published_date: string,
  updated: string,
  selected_id: string,

}

export default function Genre({ display_name, list_name_encoded, selected_id }: IGenreProps) {
  return (
    <Link href={`/list/${list_name_encoded}`}>
      <li className={(selected_id === list_name_encoded) ? styles.sel_genre : styles.genre}>
        {display_name}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
      </li></Link>
  );
}
