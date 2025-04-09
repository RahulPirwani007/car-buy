import React, { useRef } from "react";

const Header = ({ onSearch }) => {
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value.trim();
    onSearch(searchTerm);
    console.log(searchTerm);
  };
  return (
    <header>
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/gradient-auto-parts-logo-design_23-2149460685.jpg"
          alt="logo"
        />
      </div>
      <div className="searchBar">
        <input
          type="search"
          placeholder="Search Car, Modle"
          ref={searchInputRef}
        />
        <i className="bx bx-search-alt-2" onClick={handleSearch}></i>
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
