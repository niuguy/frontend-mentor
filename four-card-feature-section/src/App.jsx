import supervisorIcon from './assets/icon-supervisor.svg';
import teamBuilderIcon from './assets/icon-team-builder.svg';
import karmaIcon from './assets/icon-karma.svg';
import calculatorIcon from './assets/icon-calculator.svg';

function App() {
  const features = [
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      icon: supervisorIcon,
      borderColor: "border-cyan-400",
      gridArea: "col-span-1 row-start-1 md:col-start-1 md:row-start-2 md:row-span-2"
    },
    {
      title: "Team Builder",
      description: "Scans our talent network to create the optimal team for your project",
      icon: teamBuilderIcon,
      borderColor: "border-red-400",
      gridArea: "col-span-1 row-start-2 md:col-start-2 md:row-start-1 md:row-span-2"
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      icon: karmaIcon,
      borderColor: "border-orange-400",
      gridArea: "col-span-1 row-start-3 md:col-start-2 md:row-start-3 md:row-span-2"
    },
    {
      title: "Calculator",
      description: "Uses data from past projects to provide better delivery estimates",
      icon: calculatorIcon,
      borderColor: "border-blue-400",
      gridArea: "col-span-1 row-start-4 md:col-start-3 md:row-start-2 md:row-span-2"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-2xl md:text-4xl font-extralight text-gray-700 leading-normal">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">
            Powered by Technology
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-500 max-w-[33.75rem] mx-auto">
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
          </p>
        </header>

        {/* Features Grid */}
        <section aria-label="Features" className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-6 md:gap-8 max-w-[69.375rem] mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`
                bg-white rounded-lg shadow-lg border-t-4 ${feature.borderColor}
                ${feature.gridArea}
                h-[222px] md:h-auto
                p-7 flex flex-col
              `}
            >
              <h3 className="font-semibold text-xl leading-normal text-gray-700">
                {feature.title}
              </h3>
              <p className="text-[13px] leading-[23px] text-gray-500 opacity-50">
                {feature.description}
              </p>
              <div className="mt-auto self-end">
                <img src={feature.icon} alt={feature.title} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
