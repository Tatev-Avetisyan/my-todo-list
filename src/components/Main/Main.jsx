import styles from "./main.module.scss";
import MainHead from "../Head/MainHead/MainHead";

const Main = () => {
  return (
    <main className={styles.mainWrapper}>
      <MainHead />
    </main>
  );
};

export default Main;
