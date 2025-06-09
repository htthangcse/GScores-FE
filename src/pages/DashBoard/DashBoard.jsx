import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { fetchScoreLevelsReportAPI } from '../../apis/index';

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchScoreLevelsReportAPI();

        const subjectNameMap = {
          toan: 'Math',
          ngu_van: 'Literature',
          vat_li: 'Physics',
          hoa_hoc: 'Chemistry',
          dia_li: 'Geography',
          gdcd: 'Civic Education',
          lich_su: 'History',
          ngoai_ngu: 'Foreign Language',
          sinh_hoc: 'Biology',
        };

        const transformedData = Object.entries(result).map(([subject, scores]) => ({
          subject: subjectNameMap[subject] || subject,
          excellent: scores.excellent,
          good: scores.good,
          average: scores.average,
          weak: scores.weak
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Failed to fetch score levels report:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-8">Loading...</p>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Score Levels by Subject</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 50 }}
          className='cursor-pointer'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" angle={-20} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip formatter={(value) => `${value} students`} />
          <Bar dataKey="excellent" stackId="a" fill="#16a34a" name="Excellent (>=8)" />
          <Bar dataKey="good" stackId="a" fill="#3b82f6" name="Good (6-8)" />
          <Bar dataKey="average" stackId="a" fill="#facc15" name="Average (4-6)" />
          <Bar dataKey="weak" stackId="a" fill="#ef4444" name="Weak (<4)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashBoard;
