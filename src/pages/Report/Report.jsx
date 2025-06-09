import { useEffect, useState } from "react";
import { fetchTopGroupAStudentsAPI } from "../../apis/index";

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
    <div className="w-full px-4 py-4 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Top 10 Students - Group A (Math, Physics, Chemistry)
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow bg-white">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Registration Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Math
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Physics
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Chemistry
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {student.sbd}
                    </td>
                    <td className="px-6 py-4">{student.toan}</td>
                    <td className="px-6 py-4">{student.vat_li}</td>
                    <td className="px-6 py-4">{student.hoa_hoc}</td>
                    <td className="px-6 py-4 font-semibold">
                      {student.totalScore}
                    </td>
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
