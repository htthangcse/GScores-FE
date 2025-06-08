import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
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
          // thêm các môn khác nếu có
        };

        const arr = Object.entries(result).map(([subject, scores]) => ({
          subject: subjectNameMap[subject] || subject,
          ...scores
        }));

        setData(arr);
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
    <div className="w-full max-w-5xl h-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Score Distribution by Subject</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 50  }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="subject" 
            interval={0}
            angle={-25}
            textAnchor="end"
          />
          <YAxis />
          <Tooltip />
          <Legend 
            layout="horizontal"
            verticalAlign="top"
            align="center"
          />
          <Bar dataKey="excellent" fill="#4ade80" name=">= 8" />
          <Bar dataKey="good" fill="#60a5fa" name="6 - 8" />
          <Bar dataKey="average" fill="#facc15" name="4 - 6" />
          <Bar dataKey="weak" fill="#f87171" name="< 4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashBoard;
