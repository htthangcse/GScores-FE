import React from "react";

const SearchScore = () => {
  return (
    <main className="flex-1 bg-gray-100 p-8 space-y-6 overflow-y-auto">
      {/* Form Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">User Registration</h2>
        <label htmlFor="regNum" className="block mb-2">
          Registration Number:
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="regNum"
            placeholder="Enter registration number"
            className="border rounded px-4 py-2 w-80 text-sm"
          />
          <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">
            Submit
          </button>
        </div>
      </section>

      {/* Score Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Detailed Scores</h2>
        <p className="text-gray-600">Detailed view of search scores here!</p>
      </section>
    </main>
  );
};

export default SearchScore;
