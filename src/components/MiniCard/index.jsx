import styles from "./styles.module.css";

const MiniCard = ({ title, value }) => {
  return (
    <span className={styles.container}>
      <b>{title}:</b>
      {value}
    </span>
  );
}

export default MiniCard
