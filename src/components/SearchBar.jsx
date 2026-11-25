import { SearchIcon, CloseIcon } from "./Icons";
import "./SearchBar.css";

function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search-box">
      <SearchIcon size={20} />

      <input
        type="text"
        placeholder="Search dishes or categories"
        aria-label="Search dishes"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {search.length > 0 && (
        <button className="clear" aria-label="Clear search" onClick={() => onSearchChange("")}>
          <CloseIcon size={16} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;