import styles from "./mainHead.module.scss";
import TitleAndCount from "../TitleAndCount/TitleAndCount";

const MainHead = () => {
  return (
    <div className={styles.mainHeadWrapper}>
      <TitleAndCount />
    </div>
  );
};

export default MainHead;
