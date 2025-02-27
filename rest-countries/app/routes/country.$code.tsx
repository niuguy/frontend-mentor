import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import CountryDetail from "../components/CountryDetail";
import { getCountryByCode, getBorderCountries } from "../services/countryService";
import type { Country } from "../types/country";

export function meta({ params }: { params: { code: string } }) {
  const country = getCountryByCode(params.code);
  return [
    { title: country ? `${country.name} | REST Countries API` : "Country Details" },
    { name: "description", content: country ? `Learn about ${country.name}` : "Country details" },
  ];
}

export default function CountryPage() {
  const { code } = useParams<{ code: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<{ name: string; alpha3Code: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) {
      setError("Country code is required");
      setLoading(false);
      return;
    }

    const countryData = getCountryByCode(code);
    if (!countryData) {
      setError("Country not found");
      setLoading(false);
      return;
    }

    setCountry(countryData);
    
    if (countryData.borders && countryData.borders.length > 0) {
      const borders = getBorderCountries(countryData.borders);
      setBorderCountries(borders);
    }
    
    setLoading(false);
  }, [code]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="bg-gray-100">
        {loading ? (
          <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        ) : error ? (
          <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-xl text-red-500">{error}</p>
          </div>
        ) : country ? (
          <CountryDetail
            name={country.name}
            nativeName={country.nativeName}
            population={country.population}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital || "N/A"}
            topLevelDomain={country.topLevelDomain}
            currencies={country.currencies || []}
            languages={country.languages}
            flagUrl={country.flags.svg}
            borderCountries={borderCountries}
          />
        ) : null}
      </main>
    </div>
  );
} 