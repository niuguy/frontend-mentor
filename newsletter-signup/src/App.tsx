import { useState } from 'react';
import desktopIllustration from './assets/images/illustration-sign-up-desktop.svg';
import mobileIllustration from './assets/images/illustration-sign-up-mobile.svg';
import iconList from './assets/images/icon-list.svg';


const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Valid email required');
      return;
    }

    setError('');
    setIsSuccess(true);
  };

  const handleDismiss = () => {
    setIsSuccess(false);
    setEmail('');
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-white sm:bg-slate-800 sm:p-6 sm:flex sm:items-center sm:justify-center">
        <div className="w-full sm:max-w-[504px] sm:bg-white sm:rounded-[36px] sm:p-12 sm:shadow-[0_15px_60px_0_rgba(0,0,0,0.25)]">
          {/* Message Container */}
          <div className="p-6 space-y-8 sm:p-0">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6A3A] to-[#FF527B] flex items-center justify-center">
              <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                <path d="M1 8.85714L9.57143 17.4286L26.1429 1" stroke="white" strokeWidth="4"/>
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-[40px] font-bold text-slate-800 leading-tight">
              Thanks for subscribing!
            </h1>

            <p className="text-slate-700">
              A confirmation email has been sent to <span className="font-bold">{email}</span>. 
              Please open it and click the button inside to confirm your subscription.
            </p>
          </div>

          {/* Dismiss Button */}
          <div className="fixed bottom-0 left-0 right-0 p-6 sm:static sm:p-0 sm:mt-8">
            <button
              onClick={handleDismiss}
              className="w-full bg-slate-800 text-white rounded-lg px-6 py-4 font-bold hover:bg-gradient-to-r from-[#FF6A3A] to-[#FF527B] shadow-[0_16px_32px_0_rgba(255,97,85,0.5)]"
            >
              Dismiss message
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-[36px] w-full max-w-[375px] sm:max-w-[608px] lg:max-w-[904px] md:h-[878px] lg:h-[641px] p-6 sm:p-10 lg:p-2 overflow-hidden shadow-[0_15px_60px_0_rgba(0,0,0,0.25)]">
        {/* Content Container */}
        <div className="lg:flex lg:gap-16 lg:p-4">
          {/* Left Content */}
          <div className="flex flex-col space-y-10 lg:max-w-[376px]">
            {/* Mobile: Image appears first */}
            <div className="lg:hidden -mx-6 -mt-6">
              <img src={mobileIllustration} alt="Mobile Illustration" className="w-full h-auto" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-[40px] font-bold text-slate-800">
                Stay updated!
              </h1>
              
              <p className="text-slate-700">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              
              <ul className="space-y-4">
                {['Product discovery and building what matters',
                  'Measuring to ensure updates are a success',
                  'And much more!'
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <img src={iconList} alt="" className="w-5 h-5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-800">
                    Email address
                  </label>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@company.com"
                  className={`w-full px-6 py-4 rounded-lg border ${
                    error ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white rounded-lg px-6 py-4 font-bold hover:bg-gradient-to-r from-[#FF6A3A] to-[#FF527B]"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          {/* Desktop: Image Section */}
          <div className="hidden lg:block flex-shrink-0 lg:max-w-auto lg:max-h-[563px]">
            <img src={desktopIllustration} alt="Desktop Illustration" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;