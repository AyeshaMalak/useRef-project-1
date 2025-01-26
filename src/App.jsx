import { useRef } from 'react';
import './App.css';

function App() {
  const focusRef = useRef(null);
  const handleFocus = () => {
    focusRef.current.focus();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Focus Test
        </h1>
        
        <input
          type="text"
          placeholder="Click on the button to focus here"
          ref={focusRef}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 transition duration-300 ease-in-out"
        />
        
        <button
          onClick={handleFocus}
          className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
        >
          Focus the Input Field
        </button>
      </div>
    </div>
  );
}

export default App;

