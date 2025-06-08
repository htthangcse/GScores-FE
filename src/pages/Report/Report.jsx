import React from "react";

const mockData = [
    { name: "Nguyen Van A", math: 9, physics: 8.5, chemistry: 9.5 },
    { name: "Tran Thi B", math: 8.8, physics: 9, chemistry: 9.2 },
    { name: "Le Van C", math: 9.1, physics: 9.4, chemistry: 8.8 },
    { name: "Pham Thi D", math: 8.5, physics: 8.5, chemistry: 8.5 },
    { name: "Nguyen Van E", math: 9.5, physics: 9, chemistry: 9 },
    { name: "Vo Thi F", math: 8.2, physics: 8.6, chemistry: 9 },
    { name: "Bui Van G", math: 9.3, physics: 8.9, chemistry: 8.7 },
    { name: "Do Thi H", math: 8.6, physics: 9.1, chemistry: 8.9 },
    { name: "Nguyen Van I", math: 9.8, physics: 8.8, chemistry: 9 },
    { name: "Tran Van K", math: 9.0, physics: 9.0, chemistry: 9.0 },
  ];

const Report = () => {
  const topStudents = mockData
    .map((s) => ({
      ...s,
      average: Number(((s.math + s.physics + s.chemistry) / 3).toFixed(2)),
    }))
    .sort((a, b) => b.average - a.average)
    .slice(0, 10);

  return (
    <div className="w-full px-4 py-6 flex justify-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Top 10 Students - Group A (Math, Physics, Chemistry)
        </h2>

        <div className="overflow-x-auto border shadow-md">
          <table className="w-full table-fixed bg-white text-sm text-center">
            <thead className="bg-blue-100 text-gray-700 font-semibold">
              <tr>
                <th className="py-3 px-3 border w-16">#</th>
                <th className="py-3 px-3 border ">Name</th>
                <th className="py-3 px-3 border w-40">Math</th>
                <th className="py-3 px-3 border w-40">Physics</th>
                <th className="py-3 px-3 border w-40">Chemistry</th>
                <th className="py-3 px-3 border w-48">Average</th>
              </tr>
            </thead>
            <tbody>
              {topStudents.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-1 px-3 border">{index + 1}</td>
                  <td className="py-1 px-3 border text-left">{student.name}</td>
                  <td className="py-1 px-3 border">{student.math}</td>
                  <td className="py-1 px-3 border">{student.physics}</td>
                  <td className="py-1 px-3 border">{student.chemistry}</td>
                  <td className="py-1 px-3 border font-semibold">
                    {student.average}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;

