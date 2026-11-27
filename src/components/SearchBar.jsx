import { SearchIcon, CloseIcon } from "./Icons";
import "./SearchBar.css";

function SearchBar({ value, onChange, onSubmit, placeholder = "Search for food, restaurants...", large }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit();
  }

  return (
    <form className={large ? "search-bar large" : "search-bar"} onSubmit={handleSubmit}>
      <SearchIcon size={18} />

      <input
        type="text"
        placeholder={placeholder}
        aria-label="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value.length > 0 && (
        <button type="button" className="clear" aria-label="Clear search" onClick={() => onChange("")}>
          <CloseIcon size={14} />
        </button>
      )}

      <button type="submit" className="go" aria-label="Search">
        <SearchIcon size={18} />
      </button>
    </form>
  );
}

export default SearchBar;