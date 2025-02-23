import React from 'react';

interface BillInputProps {
  bill: number;
  setBill: (value: number) => void;
}

const BillInput: React.FC<BillInputProps> = ({ bill, setBill }) => {
  return (
    <div className="mb-8">
      <label htmlFor="bill" className="text-[#004d4d] mb-2 block">Bill</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
        className="w-full bg-[#f3f8fb] text-right text-[#004d4d] text-xl py-2 px-4 rounded-lg border border-[#004d4d] focus:outline-none focus:ring-2 focus:ring-[#26c0ab]"
      />
    </div>
  );
};

export default BillInput;
