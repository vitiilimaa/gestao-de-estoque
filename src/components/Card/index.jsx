import styles from "./styles.module.css";

const Card = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <h1 className={styles.value}>{value}</h1>
    </div>
  );
};

export default Card;
