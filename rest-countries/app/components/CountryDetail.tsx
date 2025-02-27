import { Link } from "react-router";

interface BorderCountry {
  name: string;
  alpha3Code: string;
}

interface CountryDetailProps {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: { name: string }[];
  flagUrl: string;
  borderCountries: BorderCountry[];
}

export default function CountryDetail({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  flagUrl,
  borderCountries,
}: CountryDetailProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 shadow-md rounded-md text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-full h-auto shadow-md">
          <img
            src={flagUrl}
            alt={`Flag of ${name}`}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            {name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p>
                <span className="font-semibold">Native Name: </span>
                {nativeName}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {capital}
              </p>
            </div>

            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {topLevelDomain.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {currencies.map((currency) => currency.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {languages.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mr-2">
                Border Countries:
              </h3>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((country) => (
                  <Link
                    key={country.alpha3Code}
                    to={`/country/${country.alpha3Code}`}
                    className="px-4 py-1 bg-white dark:bg-gray-800 shadow-sm rounded-sm text-sm text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 