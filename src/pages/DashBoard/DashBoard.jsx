// src/pages/Report.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    subject: 'Math',
    high: 12,      // >= 8
    fairlyHigh: 6, // 6 <= x < 8
    medium: 4,     // 4 <= x < 6
    low: 2         // < 4
  },
  {
    subject: 'Physics',
    high: 9,
    fairlyHigh: 7,
    medium: 5,
    low: 1
  },
  {
    subject: 'Chemistry',
    high: 10,
    fairlyHigh: 5,
    medium: 6,
    low: 3
  },
  {
    subject: 'English',
    high: 8,
    fairlyHigh: 8,
    medium: 4,
    low: 4
  },
  {
    subject: 'English',
    high: 8,
    fairlyHigh: 8,
    medium: 4,
    low: 4
  },
  {
    subject: 'English',
    high: 8,
    fairlyHigh: 8,
    medium: 4,
    low: 4
  },
  {
    subject: 'English',
    high: 8,
    fairlyHigh: 8,
    medium: 4,
    low: 4
  },
  {
    subject: 'English',
    high: 8,
    fairlyHigh: 8,
    medium: 4,
    low: 4
  },
];

const Report = () => {
  return (
    <div className="w-full max-w-5xl h-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Score Distribution by Subject</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="high" fill="#4ade80" name=">= 8" />
          <Bar dataKey="fairlyHigh" fill="#60a5fa" name="6 - 8" />
          <Bar dataKey="medium" fill="#facc15" name="4 - 6" />
          <Bar dataKey="low" fill="#f87171" name="< 4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Report;
