import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings, search, deleteListing} ) {

  const renderListings = listings
    .filter((listing) => 
      listing.description.toLowerCase().includes(search.toLowerCase())
    )
    .map((listing) => 
      (<ListingCard 
        key={listing.id} 
        listing={listing} 
        deleteListing={deleteListing} 
      />)
    );

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
