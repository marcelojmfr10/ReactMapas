import { useContext, useRef, type ChangeEvent } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 350);
  };

  return (
    <div
      className="search-container"
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
        left: "20px",
        padding: "5px",
        position: "fixed",
        top: "20px",
        width: "250px",
        zIndex: 9999,
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar"
        onChange={onQueryChanged}
      />

      <SearchResults />
    </div>
  );
};
