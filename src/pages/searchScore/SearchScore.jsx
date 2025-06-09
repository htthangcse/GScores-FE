import React, { useState } from "react";
import { fetchStudentScoreDetailsAPI } from "../../apis/index";

const SearchScore = () => {
  const [regNum, setRegNum] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!regNum.trim()) {
      setError("Please enter a registration number.");
      return;
    }

    if (!/^\d{8}$/.test(regNum.trim())) {
      setError("Registration number must be 8 digits.");
      return;
    }

    try {
      const data = await fetchStudentScoreDetailsAPI(regNum.trim());
      setStudentData(data);
      setError("");
    } catch (err) {
      setStudentData(null);
      setError("Student not found.");
    }
  };

  return (
    <main className="flex-1 bg-gray-100 p-8 space-y-6 overflow-y-auto">
      {/* Form Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Search Student Score</h2>
        <label htmlFor="regNum" className="block mb-2">
          Registration Number:
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="regNum"
            placeholder="Enter registration number"
            className="border rounded px-4 py-2 w-80 text-sm"
            value={regNum}
            onChange={(e) => setRegNum(e.target.value)}
          />
          <button
            className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 cursor-pointer"
            onClick={handleSearch}
          >
            Submit
          </button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </section>

      {/* Score Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Detailed Scores</h2>
        {studentData ? (
          <div className="text-sm text-gray-800 space-y-2">
            <p><strong>Registration Number:</strong> {studentData.sbd}</p>
            <p><strong>Math:</strong> {studentData.toan}</p>
            <p><strong>Literature:</strong> {studentData.ngu_van}</p>
            <p><strong>Foreign Language({studentData.ma_ngoai_ngu}): </strong> {studentData.ngoai_ngu}</p>
            <p><strong>Physics:</strong> {studentData.vat_li}</p>
            <p><strong>Chemistry:</strong> {studentData.hoa_hoc}</p>
            <p><strong>Biology:</strong> {studentData.sinh_hoc}</p>
            <p><strong>History:</strong> {studentData.lich_su}</p>
            <p><strong>Geography:</strong> {studentData.dia_li}</p>
            <p><strong>Civic Education:</strong> {studentData.gdcd}</p>
          </div>
        ) : (
          <p className="text-gray-600">Enter a registration number and press submit.</p>
        )}
      </section>
    </main>
  );
};

export default SearchScore;
