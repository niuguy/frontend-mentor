import { useState, useEffect, useCallback } from "react";
import type { Route } from "./+types/home";
import Header from "../components/Header";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";
import { 
  getAllCountries, 
  getCountriesByRegion, 
  searchCountries, 
  getUniqueRegions 
} from "../services/countryService";
import type { Country } from "../types/country";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Where in the world? | REST Countries API" },
    { name: "description", content: "Explore countries around the world" },
  ];
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regions, setRegions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allCountries = getAllCountries();
    setCountries(allCountries);
    setFilteredCountries(allCountries);
    setRegions(getUniqueRegions());
    setLoading(false);
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    applyFilters(term, selectedRegion);
  }, [selectedRegion]);

  const handleRegionFilter = useCallback((region: string) => {
    setSelectedRegion(region);
    applyFilters(searchTerm, region);
  }, [searchTerm]);

  const applyFilters = (search: string, region: string) => {
    let result = getAllCountries();

    if (search) {
      result = searchCountries(search);
    }

    if (region) {
      result = result.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );
    }

    setFilteredCountries(result);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="bg-gray-100">
        <SearchFilter 
          onSearch={handleSearch} 
          onFilterByRegion={handleRegionFilter} 
          regions={regions} 
        />

        {loading ? (
          <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        ) : filteredCountries.length > 0 ? (
          <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredCountries.map((country) => (
              <CountryCard
                key={country.alpha3Code}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital || "N/A"}
                flagUrl={country.flags.svg}
                alpha3Code={country.alpha3Code}
              />
            ))}
          </div>
        ) : (
          <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-xl">No countries found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}
