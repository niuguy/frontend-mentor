import { useState } from "react";

// Container Component
export default function App() {
  const [bill, setBill] = useState(142.55);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [people, setPeople] = useState(5);
  const [customTip, setCustomTip] = useState("");

  const tipAmountPerPerson = (bill * (tipPercentage / 100)) / people;
  const totalPerPerson = (bill / people) + tipAmountPerPerson;

  const handleReset = () => {
    setBill(0);
    setTipPercentage(15);
    setPeople(1);
    setCustomTip("");
  };

  return (
    <TipCalculator
      bill={bill}
      setBill={setBill}
      tipPercentage={tipPercentage}
      setTipPercentage={setTipPercentage}
      people={people}
      setPeople={setPeople}
      customTip={customTip}
      setCustomTip={setCustomTip}
      tipAmountPerPerson={tipAmountPerPerson}
      totalPerPerson={totalPerPerson}
      onReset={handleReset}
    />
  );
}

// UI Component
function TipCalculator({
  bill,
  setBill,
  tipPercentage,
  setTipPercentage,
  people,
  setPeople,
  customTip,
  setCustomTip,
  tipAmountPerPerson,
  totalPerPerson,
  onReset
}: {
  bill: number;
  setBill: (value: number) => void;
  tipPercentage: number;
  setTipPercentage: (value: number) => void;
  people: number;
  setPeople: (value: number) => void;
  customTip: string;
  setCustomTip: (value: string) => void;
  tipAmountPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
}) {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <main className="min-h-screen bg-[#e0f2f2] flex flex-col items-center justify-center font-mono">
      <h1 className="text-[#004d4d] text-2xl tracking-[0.5em] mb-12">
        <span className="block text-center">SPLI</span>
        <span className="block text-center">TTER</span>
      </h1>

      <div className="bg-white rounded-3xl p-8 shadow-lg w-[90%] max-w-[920px] flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <label className="text-[#004d4d] mb-2 block">Bill</label>
            <input
              type="number"
              id="bill"
              value={bill}
              onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
              className="w-full bg-[#f3f8fb] text-right text-[#004d4d] text-xl py-2 px-4 rounded-lg"
            />
          </div>

          <div className="mb-8">
            <label className="text-[#004d4d] mb-2 block">Select Tip %</label>
            <div className="grid grid-cols-3 gap-3">
              {tipOptions.map((tip) => (
                <button
                  key={tip}
                  onClick={() => setTipPercentage(tip)}
                  className={`py-2 rounded-lg ${tipPercentage === tip
                      ? "bg-[#26c0ab] text-[#004d4d]"
                      : "bg-[#004d4d] text-white"
                    }`}
                >
                  {tip}%
                </button>
              ))}
              <input
                type="number"
                id="customTip"
                placeholder="Custom"
                value={customTip}
                onChange={(e) => {
                  setCustomTip(e.target.value);
                  setTipPercentage(parseFloat(e.target.value) || 0);
                }}
                className="bg-[#f3f8fb] text-center text-[#004d4d] rounded-lg"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <label className="text-[#004d4d] mb-2 block">Number of People</label>
              {people === 0 && (
                <span className="text-red-500 mb-2">Can't be zero</span>
              )}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#004d4d]">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" /></svg>
              </span>
              <input
                type="number"
                id="people"
                value={people}
                onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
                className={`w-full bg-[#f3f8fb] text-right text-[#004d4d] text-xl py-2 pl-12 pr-4 rounded-lg ${people === 0 ? 'outline outline-red-500' : ''
                  }`}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#004d4d] rounded-2xl p-6 flex flex-col">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-white">Tip Amount</p>
                <p className="text-[#5e7a7d] text-sm">/ person</p>
              </div>
              <p className="text-[#26c0ab] text-4xl">
                ${tipAmountPerPerson.toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-white">Total</p>
                <p className="text-[#5e7a7d] text-sm">/ person</p>
              </div>
              <p className="text-[#26c0ab] text-4xl">
                ${totalPerPerson.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            onClick={onReset}
            className="w-full bg-[#26c0ab] text-[#004d4d] py-3 rounded-lg mt-8 hover:bg-opacity-90 transition-colors"
          >
            RESET
          </button>
        </div>
      </div>
    </main>
  );
}