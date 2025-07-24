import React, { useState } from "react";
import "./index.css";
import SearchBar from "./components/search";
import FrontTextSection from "./components/Home";

const App = () => {
  const [search, setSearch] = useState("default value");

  return (
    <main>
      <div className="Pattern">
        <div className="wrapper">
          <header className="bg-[#141414] py-3 shadow-md w-full fixed left-0 top-0 z-50">
            <div className="w-full flex items-center justify-between px-4 max-w-none">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-extrabold text-red-600 tracking-tight">
                  Movies Circus
                </span>
                <span className="hidden md:inline text-gray-300 text-lg font-semibold">
                  Browse
                </span>
                <span className="hidden md:inline text-gray-300 text-lg font-semibold">
                  My List
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <SearchBar search={search} setSearch={setSearch} />
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition">
                  Sign In
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
      <FrontTextSection />
    </main>
  );
};

export default App;
