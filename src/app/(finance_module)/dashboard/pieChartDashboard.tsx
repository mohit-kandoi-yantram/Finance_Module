import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { equipments, other_expenses, pharmacy, salaries } from './pieChartData';
// import { PieChartRender } from '@/app/types/Interface';
interface PieChartExampleProps {
  selectedItem: Set<string>;
}

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AF19FF',
  '#F74242',
];

const PieChartExample: React.FC<PieChartExampleProps> = ({ selectedItem }) => {
  const data = () => {
    if (selectedItem.has('salaries')) return salaries;
    if (selectedItem.has('pharmacy')) return pharmacy;
    if (selectedItem.has('equipments')) return equipments;
    if (selectedItem.has('other_expenses')) return other_expenses;
    return [];
  };
  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data()}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
      >
        {data().map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="vertical" verticalAlign="middle" align="right" />
    </PieChart>
  );
};

export default PieChartExample;
