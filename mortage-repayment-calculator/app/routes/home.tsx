import { useState } from "react";
import illustration from "~/assets/images/illustration-empty.svg";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  
  const calculateRepayments = () => {
    const principal = parseFloat(amount);
    const yearlyRate = parseFloat(interestRate) / 100;
    const monthlyRate = yearlyRate / 12;
    const numberOfPayments = parseFloat(term) * 12;
    
    if (mortgageType === "repayment") {
      // Formula for repayment mortgage: P × r × (1 + r)^n / ((1 + r)^n - 1)
      const payment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    } else {
      // Interest only: principal × yearly rate / 12
      const payment = principal * yearlyRate / 12;
      setMonthlyPayment(payment);
    }
  };
  
  const clearAll = () => {
    setAmount("");
    setTerm("");
    setInterestRate("");
    setMortgageType("repayment");
    setMonthlyPayment(null);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-0 md:p-4 flex flex-col md:flex-row items-center min-h-screen justify-center">
      <div className="bg-white rounded-none md:rounded-lg p-4 md:p-6 shadow-md w-full md:w-1/2 relative md:h-[500px] flex flex-col md:z-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Mortgage Calculator</h1>
          <button 
            onClick={clearAll}
            className="text-blue-500 hover:underline"
          >
            Clear All
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Mortgage Amount</label>
          <div className="relative flex overflow-hidden border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
            <div className="flex items-center bg-blue-50 px-3">
              <span className="text-gray-500">£</span>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full py-2 px-3 border-0 focus:outline-none"
              placeholder="Enter amount"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-600 mb-2">Mortgage Term</label>
            <div className="relative flex overflow-hidden border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full py-2 px-3 border-0 focus:outline-none"
                placeholder="Enter term"
              />
              <div className="flex items-center bg-blue-50 px-3">
                <span className="text-gray-500">years</span>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-600 mb-2">Interest Rate</label>
            <div className="relative flex overflow-hidden border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full py-2 px-3 border-0 focus:outline-none"
                placeholder="Enter rate"
                step="0.01"
              />
              <div className="flex items-center bg-blue-50 px-3">
                <span className="text-gray-500">%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Mortgage Type</label>
          <div className="space-y-2">
            <label className="block border rounded-md p-3 cursor-pointer">
              <input
                type="radio"
                name="mortgageType"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={() => setMortgageType("repayment")}
                className="mr-2"
              />
              Repayment
            </label>
            <label className="block border rounded-md p-3 cursor-pointer">
              <input
                type="radio"
                name="mortgageType"
                value="interestOnly"
                checked={mortgageType === "interestOnly"}
                onChange={() => setMortgageType("interestOnly")}
                className="mr-2"
              />
              Interest Only
            </label>
          </div>
        </div>
        
        <button
          onClick={calculateRepayments}
          className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-4 rounded-full flex items-center justify-center"
        >
          <span className="mr-2">🧮</span>
          Calculate Repayments
        </button>
      </div>
      
      <div className="w-full md:w-1/2 bg-[#1e2e3e] rounded-none md:rounded-tl-lg md:rounded-bl-lg text-white p-4 md:p-6 flex flex-col justify-center relative md:-ml-4 md:h-[500px] flex-grow md:flex-grow-0 md:z-10">
        <div className="flex justify-center mb-6">
          <img src={illustration} alt="Mortgage illustration" className="w-32 h-32 object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Results shown here</h2>
        {monthlyPayment ? (
          <div className="text-center">
            <p className="text-xl mb-2">Monthly Payment:</p>
            <p className="text-3xl font-bold">£{monthlyPayment.toFixed(2)}</p>
          </div>
        ) : (
          <p className="text-center">
            Complete the form and click "calculate repayments" to see what your monthly repayments would be.
          </p>
        )}
      </div>
    </div>
  );
}
