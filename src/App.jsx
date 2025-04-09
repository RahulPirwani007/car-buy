import React, { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Hero searchTerm={searchTerm} />
    </>
  );
};

export default App;
