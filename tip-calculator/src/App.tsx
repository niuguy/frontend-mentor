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
    <div className="min-h-screen bg-[#e0f2f2] flex flex-col items-center pt-8 font-mono">
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
                  className={`py-2 rounded-lg ${
                    tipPercentage === tip
                      ? "bg-[#26c0ab] text-[#004d4d]"
                      : "bg-[#004d4d] text-white"
                  }`}
                >
                  {tip}%
                </button>
              ))}
              <input
                type="number"
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
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
              className={`w-full bg-[#f3f8fb] text-right text-[#004d4d] text-xl py-2 px-4 rounded-lg ${
                people === 0 ? 'outline outline-red-500' : ''
              }`}
            />
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
    </div>
  );
}