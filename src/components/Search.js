import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Create a debounced version of the onSearch callback
  const debouncedSearch = useCallback(
    debounce(query => onSearch(query), 500), // Adjust debounce delay as needed
    [onSearch]
  );

  const handleInputChange = event => {
    const value = event.target.value;
    setSearchTerm(value); // Update the local state for immediate UI feedback
    debouncedSearch(value); // Use the debounced version for API calls
  };

  useEffect(() => {
    // Cleanup the debounce effect on unmount
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
    </div>
  );
};

export default Search;
