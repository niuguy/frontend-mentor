import { Link } from "react-router";

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flagUrl: string;
  alpha3Code: string;
}

export default function CountryCard({ 
  name, 
  population, 
  region, 
  capital, 
  flagUrl,
  alpha3Code
}: CountryCardProps) {
  return (
    <Link 
      to={`/country/${alpha3Code}`}
      className="bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={flagUrl} 
          alt={`Flag of ${name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">{name}</h2>
        <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <p><span className="font-semibold">Population:</span> {population.toLocaleString()}</p>
          <p><span className="font-semibold">Region:</span> {region}</p>
          <p><span className="font-semibold">Capital:</span> {capital}</p>
        </div>
      </div>
    </Link>
  );
} 