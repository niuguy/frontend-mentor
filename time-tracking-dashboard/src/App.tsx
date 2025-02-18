import { useState } from 'react';
import data from '../data.json';
import imageJeremy from './assets/images/image-jeremy.png';
import ellipses from './assets/images/icon-ellipsis.svg?inline';
import workIcon from './assets/images/icon-work.svg?inline';
import playIcon from './assets/images/icon-play.svg?inline';
import studyIcon from './assets/images/icon-study.svg?inline';
import exerciseIcon from './assets/images/icon-exercise.svg?inline';
import socialIcon from './assets/images/icon-social.svg?inline';
import selfCareIcon from './assets/images/icon-self-care.svg?inline';

type TimeframeType = 'daily' | 'weekly' | 'monthly';

function App() {
  const [timeframe, setTimeframe] = useState<TimeframeType>('weekly');
  const [activities, ] = useState(data);

  return (
    <main className="min-h-screen bg-[#0f1424] p-4 lg:flex lg:items-center lg:justify-center">
      <div className="max-w-[1110px] mx-auto grid gap-6 lg:grid-cols-4">
        {/* Profile Card */}
        <div className="bg-[#1c1f4a] w-full max-w-sm lg:max-w-3xs rounded-[15px] lg:row-span-2">
          <div className="bg-[#5847eb] rounded-[15px] p-6 lg:p-8">
            <div className="flex items-center gap-4 lg:block">
              <img 
                src={imageJeremy}
                alt="profile" 
                className="w-14 h-14 lg:w-20 lg:h-20 border-[3px] border-white rounded-full lg:mb-10"
              />
              <div>
                <p className="text-[#BBC0FF] text-sm">Report for</p>
                <h1 className="text-white text-2xl lg:text-4xl font-light">Jeremy Robson</h1>
              </div>
            </div>
          </div>
          <div className="p-6 lg:p-8 flex justify-between lg:flex-col lg:gap-4">
            {['daily', 'weekly', 'monthly'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period as TimeframeType)}
                className={`capitalize text-lg text-left ${
                  timeframe === period ? 'text-white' : 'text-[#7078C9]'
                } hover:text-white`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Cards */}
        {activities.map((activity) => (
          <div 
            key={activity.title}
            className={`rounded-2xl lg:max-w-[250px] pt-2 ${getBackgroundColor(activity.title)} relative overflow-hidden`}
          >
            <img 
              src={getActivityIcon(activity.title)} 
              alt="" 
              className="absolute top-[-10px] right-4 w-[60px] h-[60px] z-0"
            />
            <div className="bg-[#1c1f4a] rounded-xl mt-8 p-8 w-full hover:bg-[#34397b] cursor-pointer relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-medium">{activity.title}</h2>
                <button className="text-slate-300 hover:text-white">
                  <img src={ellipses} alt="menu" />
                </button>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-2">
                <p className="text-white text-[56px] font-light leading-none">
                  {activity.timeframes[timeframe].current}hrs
                </p>
                <p className="text-[#BBC0FF] text-sm">
                  Last {getPeriodText(timeframe)} - {activity.timeframes[timeframe].previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function getBackgroundColor(title: string): string {
  const colors: Record<string, string> = {
    Work: 'bg-[#ff8c66]',
    Play: 'bg-[#56c2e6]',
    Study: 'bg-[#ff5c7c]',
    Exercise: 'bg-[#4acf81]',
    Social: 'bg-[#7536d3]',
    'Self Care': 'bg-[#f1c75b]'
  };
  return colors[title] || 'bg-gray-500';
}

function getPeriodText(timeframe: TimeframeType): string {
  const periods: Record<TimeframeType, string> = {
    daily: 'Day',
    weekly: 'Week',
    monthly: 'Month'
  };
  return periods[timeframe];
}

function getActivityIcon(title: string): string {
  const icons: Record<string, string> = {
    Work: workIcon,
    Play: playIcon,
    Study: studyIcon,
    Exercise: exerciseIcon,
    Social: socialIcon,
    'Self Care': selfCareIcon
  };
  return icons[title] || '';
}


export default App;
