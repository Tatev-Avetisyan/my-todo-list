import styles from "./mainHead.module.scss";
import TitleAndCount from "../TitleAndCount/TitleAndCount";
import Input from "../SearchTodo/SearchInput";

const MainHead = () => {
  return (
    <div className={styles.mainHeadWrapper}>
      <TitleAndCount />
      <Input />
    </div>
  );
};

export default MainHead;
