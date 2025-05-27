{/*import React, { useState } from 'react';
import { sendMessageToGemini } from '../Pages/Utils.js'; 

const Homepage = () => {
const [prompt, setPrompt] = useState('');
const [reply, setReply] = useState('');

const handleGeminiCall = async () => {
  const result = await sendMessageToGemini(prompt);
  setReply(result);
};

return (
  <div className='bg-stone-900 h-screen flex'>
    
    <input 
      value={prompt} 
      onChange={(e) => setPrompt(e.target.value)} 
      placeholder="Ask Gemini anything"
    />
    <button className="btn btn-ghost hover:bg-gray-600 text-2xl flex left-5">Login</button>
    <button className="btn btn-ghost hover:bg-gray-600 text-2xl">Sign</button>
    <button className="btn btn-ghost hover:bg-gray-600 text-2xl">Chat</button>
    <button className="btn btn-ghost hover:bg-gray-600 text-2xl" onClick={handleGeminiCall}>Talking to Gemini</button>
    <p>{reply}</p>
  </div>
);
};

export default Homepage;*/}


















import React, { useState } from 'react';
import { sendMessageToGemini } from './Utils.js';

const Homepage = () => {
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');

  const handleGeminiCall = async () => {
    const result = await sendMessageToGemini(prompt);
    setReply(result);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div>
          <button className="text-white hover:text-gray-400">Login</button>
        </div>
        <div className="space-x-4">
          <button className="text-white hover:text-gray-400">Sign</button>
          <button className="text-white hover:text-gray-400">Chat</button>
          <button 
            className="text-white hover:text-gray-400"
            onClick={handleGeminiCall}
          >
            Talking to Gemini
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-6">Ask Gemini anything</h1>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your question here..."
          className="w-full max-w-xl px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="btn btn-ghost hover:bg-gray-600 text-2xl" onClick={handleGeminiCall}>Talking to Gemini</button>
        {reply && <p className="mt-6 text-lg">{reply}</p>}
      </main>

      {/* Optional Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
      
        &copy; 2025 Gemini AI Interface
      </footer>
    </div>
  );
};

export default Homepage;
