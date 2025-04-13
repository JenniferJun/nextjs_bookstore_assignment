import styles from "../../styles/aboutus.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>About us!</h1>
      <h2>
        Welcome to the official explorer for The New York Times Best Seller list explore.
        We hope you enjoy your stay!
      </h2>
    </div>
  );
}
