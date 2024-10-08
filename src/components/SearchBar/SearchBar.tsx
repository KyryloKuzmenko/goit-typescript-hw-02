import { useState, ChangeEvent, FormEvent } from "react";
import style from "./SearchBar.module.css";
import toast, {ToastPosition} from "react-hot-toast";


interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>(""); 


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

 
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Can't be empty", {
        duration: 3000,
        position: "top" as ToastPosition,
      });
      return;
    }
    onSubmit(query);
    setQuery(""); // Очищаем поле поиска после отправки
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
