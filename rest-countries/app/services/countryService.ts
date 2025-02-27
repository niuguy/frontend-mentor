import type { Country } from "../types/country";
import countryData from "../data.json";

// Type assertion for the imported JSON data
const countries = countryData as Country[];

export const getAllCountries = (): Country[] => {
  return countries;
};

export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(
    (country) => country.alpha3Code.toLowerCase() === code.toLowerCase()
  );
};

export const getCountriesByRegion = (region: string): Country[] => {
  if (!region) return countries;
  return countries.filter(
    (country) => country.region.toLowerCase() === region.toLowerCase()
  );
};

export const searchCountries = (searchTerm: string): Country[] => {
  if (!searchTerm) return countries;
  const term = searchTerm.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(term) ||
      country.capital?.toLowerCase().includes(term) ||
      country.nativeName.toLowerCase().includes(term)
  );
};

export const getCountriesByName = (name: string): Country[] => {
  if (!name) return [];
  const term = name.toLowerCase();
  return countries.filter((country) =>
    country.name.toLowerCase().includes(term)
  );
};

export const getBorderCountries = (borderCodes: string[]): { name: string; alpha3Code: string }[] => {
  if (!borderCodes || borderCodes.length === 0) return [];
  
  return borderCodes
    .map(code => {
      const country = getCountryByCode(code);
      return country ? { name: country.name, alpha3Code: country.alpha3Code } : null;
    })
    .filter((country): country is { name: string; alpha3Code: string } => country !== null);
};

export const getUniqueRegions = (): string[] => {
  const regions = new Set<string>();
  countries.forEach((country) => {
    if (country.region) {
      regions.add(country.region);
    }
  });
  return Array.from(regions).sort();
}; 