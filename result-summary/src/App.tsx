import { useState, useEffect } from 'react';
import iconMemory from './assets/images/icon-memory.svg';
import iconReaction from './assets/images/icon-reaction.svg';
import iconVerbal from './assets/images/icon-verbal.svg';
import iconVisual from './assets/images/icon-visual.svg';
import jsonData from './assets/data.json';

interface Category {
  category: string;
  score: number;
  icon: string;
}

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API request
  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, this would be an API endpoint
        // const response = await fetch('./assets/data.json');
        // const data = await response.json();
        const data = jsonData;
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate total score
  const totalScore = Math.round(
    categories.reduce((acc, cat) => acc + cat.score, 0) / (categories.length || 1)
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      Reaction: { color: 'hsl(0, 100%, 67%)', bgColor: 'hsl(0, 100%, 97%)' },
      Memory: { color: 'hsl(39, 100%, 56%)', bgColor: 'hsl(39, 100%, 97%)' },
      Verbal: { color: 'hsl(166, 100%, 37%)', bgColor: 'hsl(166, 100%, 97%)' },
      Visual: { color: 'hsl(234, 85%, 45%)', bgColor: 'hsl(234, 85%, 97%)' },
    };
    return colors[category as keyof typeof colors];
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Reaction: iconReaction,
      Memory: iconMemory,
      Verbal: iconVerbal,
      Visual: iconVisual,
    };
    return icons[category as keyof typeof icons];
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row max-w-[740px] w-full md:w-auto">
        {/* Results Section */}
        <div className="bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-3xl p-8 text-center text-white flex-1">
          <h2 className="text-xl opacity-80 mb-6">Your Result</h2>
          <div className="bg-gradient-to-b from-indigo-800 rounded-full w-40 h-40 mx-auto flex flex-col items-center justify-center mb-6">
            <span className="text-6xl font-bold">{totalScore}</span>
            <span className="opacity-50">of 100</span>
          </div>
          <h3 className="text-2xl font-bold mb-3">Great</h3>
          <p className="opacity-70">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* Summary Section */}
        <div className="p-8 flex-1">
          <h2 className="text-xl font-bold mb-6">Summary</h2>
          <div className="space-y-4">
            {categories.map((item) => {
              const { color, bgColor } = getCategoryColor(item.category);
              return (
                <div
                  key={item.category}
                  style={{ backgroundColor: bgColor }}
                  className="flex items-center justify-between p-4 rounded-xl"
                >
                  <div className="flex items-center gap-2" style={{ color }}>
                    <img src={getCategoryIcon(item.category)} alt={item.category} className="w-5 h-5" />
                    <span>{item.category}</span>
                  </div>
                  <div className="font-bold">
                    <span>{item.score}</span>
                    <span className="text-gray-400"> / 100</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="w-full bg-slate-800 text-white rounded-full py-4 mt-6 hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-700 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
