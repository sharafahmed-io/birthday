import React from 'react';
import Confetti from 'react-confetti';
import { Cat } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      <Confetti />
      <Cat size={64} className="text-purple-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Happy Purrfect Day! 🐾</h1>
      <p className="text-lg text-gray-700">Hope your day is full of sparkles and cat cuddles!</p>
    </div>
  );
};

export default App;