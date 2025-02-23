import React from 'react';

interface PeopleInputProps {
  people: number;
  setPeople: (value: number) => void;
}

const PeopleInput: React.FC<PeopleInputProps> = ({ people, setPeople }) => {
  return (
    <div className="mb-8">
      <label className="text-[#004d4d] mb-2 block">Number of People</label>
      {people === 0 && (
        <span className="text-red-500 mb-2">Can't be zero</span>
      )}
      <input
        type="number"
        id="people"
        value={people}
        onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
        className={`w-full bg-[#f3f8fb] text-right text-[#004d4d] text-xl py-2 pl-4 rounded-lg border border-[#004d4d] focus:outline-none focus:ring-2 focus:ring-[#26c0ab] ${people === 0 ? 'outline outline-red-500' : ''}`}
      />
    </div>
  );
};

export default PeopleInput;