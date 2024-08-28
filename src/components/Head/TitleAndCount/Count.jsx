import styles from "./titleAndCount.module.scss";

const Count = () => {
  return (
    <div className={styles.count}>
      <p>Done: 2</p>
      <p>Important: 2</p>
    </div>
  );
};

export default Count;
