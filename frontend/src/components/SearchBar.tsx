import { useState } from "react";
import { useFilterStore } from "../store/useFilterStore";
import { FaFilter } from "react-icons/fa";

const filters = [
  "name",
  "age",
  "salary",
  "country",
  "city",
  "status",
];

const SearchBar = () => {
  const [selectedFilter, setSelectedFilter] = useState("name");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const fetchData = useFilterStore((state) => state.fetchData);

  const handleSearch = () => {
    fetchData({ [selectedFilter]: value });
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      
      {/* Input + Filter */}
      <div className="relative flex items-center border rounded px-3 py-2 w-96">
        
        {/* Filter Icon */}
        <FaFilter
          className="cursor-pointer mr-2"
          onClick={() => setOpen(!open)}
        />

        <input
          type="text"
          placeholder={`Search by ${selectedFilter}`}
          className="outline-none flex-1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Dropdown */}
        {open && (
          <div className="absolute top-12 left-0 bg-white shadow rounded w-full z-10">
            {filters.map((f) => (
              <div
                key={f}
                onClick={() => {
                  setSelectedFilter(f);
                  setOpen(false);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {f}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;