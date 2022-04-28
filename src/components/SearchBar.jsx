import React from 'react';

const SearchBar = ({ handleSearchSubmit, setSearchTerm }) => {
  return (
    <form
      onSubmit={(e) => {
        handleSearchSubmit(e);
      }}
      className="d-flex"
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control me-2"
        aria-label="Search"
        hint="Search"
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
