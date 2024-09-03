import styles from "./input.module.scss";
import { useContext, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";
import Button from "../../../shared/Button/Buttons";
import Input from "../../../shared/Input/Input";

const SearchInput = () => {
  const { onSearch, setFilter } = useContext(TodoContext);
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };
  const handleFilterClick = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <div className={styles.searchInputWrapper}>
      <Input
        className={styles.searchInput}
        placeholder="Type text for search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <div>
        <Button
          context="All"
          className={`${styles.btnALL} ${
            activeFilter === "All" ? styles.active : ""
          }`}
          onClick={() => handleFilterClick("All")}
        />
        <Button
          context="Done"
          className={`${styles.btnDone} ${
            activeFilter === "Done" ? styles.active : ""
          }`}
          onClick={() => handleFilterClick("Done")}
        />
        <Button
          context="Important"
          className={`${styles.btnImportant} ${
            activeFilter === "Important" ? styles.active : ""
          }`}
          onClick={() => handleFilterClick("Important")}
        />
      </div>
    </div>
  );
};

export default SearchInput;
