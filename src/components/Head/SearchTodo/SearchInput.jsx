import styles from "./input.module.scss";
import Button from "../../../shared/Button/Buttons";
import Input from "../../../shared/Input/Input";

const SearchInput = () => {
  return (
    <div className={styles.searchInputWrapper}>
      <Input className={styles.searchInput} placeholder="Type text for search..." />
      <div>
        <Button context="All" className={styles.btnALL} />
        <Button context="Done" className={styles.btnDone} />
        <Button context="Important" className={styles.btnImportant} />
      </div>
    </div>
  );
};

export default SearchInput;
