import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const salary = [
  { name: 'Doctor', value: 200 },
  { name: 'Nurses', value: 300 },
  { name: 'Technical Staff', value: 150 },
  { name: 'Non Technical Staff', value: 400 },
  { name: 'Ward Boys/Girls', value: 250 },
  { name: 'Pharmacy Staff', value: 350 },
];
const pharmacy = [{ name: 'Pharmacy', value: 500 }];
const equipments = [{ name: 'Equipments', value: 700 }];
const other_expenses = [{ name: 'Other Expenses', value: 1500 }];

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AF19FF',
  '#F74242',
];

const PieChartExample: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Pharmacy');
  const data = () => {
    switch (selectedOption) {
      case 'Salary':
        return salary;
      case 'Pharmacy':
        return pharmacy;
      case 'Equipment':
        return equipments;
      case 'Other Expenses':
        return other_expenses;
      default:
        return [];
    }
  };
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data()}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data().map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Tooltip /> */}
      <Legend layout="vertical" verticalAlign="middle" align="right" />
    </PieChart>
  );
};

export default PieChartExample;
