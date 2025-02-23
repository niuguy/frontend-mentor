import { useState } from "react";
import BillInput from './components/BillInput';
import PeopleInput from './components/PeopleInput';
import TipPercentageSelector from './components/TipPercentageSelector';

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
    <main className="min-h-screen bg-[#e0f2f2] flex flex-col items-center justify-center font-mono">
      <h1 className="text-[#004d4d] text-2xl tracking-[0.5em] mb-12">
        <span className="block text-center">SPLI</span>
        <span className="block text-center">TTER</span>
      </h1>

      <div className="bg-white rounded-3xl p-8 shadow-lg w-[90%] max-w-[920px] flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <BillInput bill={bill} setBill={setBill} />
          <TipPercentageSelector 
            tipPercentage={tipPercentage} 
            setTipPercentage={setTipPercentage} 
            customTip={customTip} 
            setCustomTip={setCustomTip} 
          />
          <PeopleInput people={people} setPeople={setPeople} />
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
            onClick={handleReset}
            className="w-full bg-[#26c0ab] text-[#004d4d] py-3 rounded-lg mt-8 hover:bg-opacity-90 transition-colors"
          >
            RESET
          </button>
        </div>
      </div>
    </main>
  );
}