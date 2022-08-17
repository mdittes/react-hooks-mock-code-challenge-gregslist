import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(setListings)
  }, []);

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  function deleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings)
  };

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer 
        listings={filteredListings} 
        search={search} 
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;

