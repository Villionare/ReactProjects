import React, { useState, useEffect } from 'react';

const quotes = [
  "Cinema is a matter of what's in the frame and what's out. — Martin Scorsese",
  "The most honest form of filmmaking is to make a film for yourself. — Peter Jackson",
  "Movies touch our hearts and awaken our vision. — Martin Scorsese",
];


const FrontTextSection = () => {

const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 3000); // ⏱️ Quote changes every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="bg-black mt-15 text-white px-6 py-12 sm:px-16 lg:px-24 text-left">
      <h1 className="text-4xl font-bold mb-6 text-red-500">Movie experiences us...</h1>

      <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-4xl">
        From heart-wrenching drama to adrenaline-pumping action, movies shape our minds and stir emotions.
        They blur the lines between reality and imagination, turning stories into memories.
      </p>

      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">🎥 Famous Movie Quote</h2>
        <blockquote className="italic text-red-300 text-2xl transition-all duration-500 ease-in-out">
          {quotes[quoteIndex]}
        </blockquote>
      </div>
    </div>
  );
}

export default FrontTextSection;