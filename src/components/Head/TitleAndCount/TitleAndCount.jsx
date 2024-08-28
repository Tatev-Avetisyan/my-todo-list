import Title from "./Title";
import Count from "./Count";
import styles from "./titleAndCount.module.scss";

const TitleAndCount = () => {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Count />
    </div>
  );
};

export default TitleAndCount;
