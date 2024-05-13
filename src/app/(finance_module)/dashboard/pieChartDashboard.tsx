import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const data = [
  { name: 'Type 1', value: 200 },
  { name: 'Type 2', value: 300 },
  { name: 'Type 3', value: 150 },
  { name: 'Type 4', value: 400 },
  { name: 'Type 5', value: 250 },
  { name: 'Type 6', value: 350 },
];

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AF19FF',
  '#F74242',
];

const PieChartExample: React.FC = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="vertical" verticalAlign="middle" align="right" />
    </PieChart>
  );
};

export default PieChartExample;
