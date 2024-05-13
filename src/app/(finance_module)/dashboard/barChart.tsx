import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  revenue: number;
  expenses: number;
}

const BarChartWithMultiXAxis: React.FC<{ data: DataItem[] }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis />
        <XAxis
          axisLine={false}
          tickLine={false}
          interval={0}
          height={1}
          scale="band"
          style={{ fontSize: '12px' }}
        ></XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" radius={[10, 10, 10, 10]}></Bar>
        <Bar dataKey="expenses" fill="#82ca9d" radius={[10, 10, 10, 10]}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWithMultiXAxis;
