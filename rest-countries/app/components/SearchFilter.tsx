import { useState, useEffect } from "react";

interface SearchFilterProps {
  onSearch: (searchTerm: string) => void;
  onFilterByRegion: (region: string) => void;
  regions: string[];
}

export default function SearchFilter({ onSearch, onFilterByRegion, regions }: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    onFilterByRegion(region);
    setIsDropdownOpen(false);
  };

  const clearRegionFilter = () => {
    setSelectedRegion(null);
    onFilterByRegion("");
  };

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between gap-10">
      <div className="relative w-full md:w-96">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          className="pl-12 pr-4 py-4 w-full rounded-md shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="relative w-full md:w-64">
        <button
          className="w-full flex items-center justify-between px-6 py-4 rounded-md shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{selectedRegion || "Filter by Region"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 overflow-hidden">
            <div className="py-1">
              {selectedRegion && (
                <button
                  className="w-full text-left px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={clearRegionFilter}
                >
                  Clear Filter
                </button>
              )}
              {regions.map((region) => (
                <button
                  key={region}
                  className="w-full text-left px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleRegionSelect(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 