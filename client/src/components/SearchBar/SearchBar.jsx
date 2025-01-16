import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    // Debounce effect to reduce API calls
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (input.trim()) {
                onSearch(input); // Call parent's search function
            }
        }, 500); // Delay of 500ms

        return () => clearTimeout(timer); // Cleanup timer
    }, [input, onSearch]);

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                type="text"
                placeholder="Type to search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Search"
            />
        </div>
    );
};

export default SearchBar;
