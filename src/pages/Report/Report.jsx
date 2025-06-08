import React, { useEffect, useState } from "react";
import { fetchTopGroupAStudentsAPI } from '../../apis/index';

const Report = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopStudents = async () => {
      try {
        const data = await fetchTopGroupAStudentsAPI();
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch top students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopStudents();
  }, []);

  return (
    <div className="w-full px-4 py-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Top Students - Group A (Math, Physics, Chemistry)
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto border shadow-md">
            <table className="w-full table-fixed bg-white text-sm text-center">
              <thead className="bg-blue-100 text-gray-700 font-semibold">
                <tr>
                  <th className="py-3 px-3 border w-12">#</th>
                  <th className="py-3 px-3 border w-40 text-left">Registration Number</th>
                  <th className="py-3 px-3 border w-20">Math</th>
                  <th className="py-3 px-3 border w-20">Physics</th>
                  <th className="py-3 px-3 border w-20">Chemistry</th>
                  <th className="py-3 px-3 border w-24">Average</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-1 px-3 border">{index + 1}</td>
                    <td className="py-1 px-3 border text-left">{student.sbd}</td>
                    <td className="py-1 px-3 border">{student.toan}</td>
                    <td className="py-1 px-3 border">{student.vat_li}</td>
                    <td className="py-1 px-3 border">{student.hoa_hoc}</td>
                    <td className="py-1 px-3 border font-semibold">{student.totalScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
