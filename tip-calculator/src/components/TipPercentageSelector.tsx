import React from 'react';

interface TipPercentageSelectorProps {
  tipPercentage: number;
  setTipPercentage: (value: number) => void;
  customTip: string;
  setCustomTip: (value: string) => void;
}

const TipPercentageSelector: React.FC<TipPercentageSelectorProps> = ({
  tipPercentage,
  setTipPercentage,
  customTip,
  setCustomTip
}) => {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
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
          className="bg-[#f3f8fb] text-center text-[#004d4d] rounded-lg border border-[#004d4d] focus:outline-none focus:ring-2 focus:ring-[#26c0ab]"
        />
      </div>
    </div>
  );
};

export default TipPercentageSelector;