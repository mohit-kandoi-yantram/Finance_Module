import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { menu } from './data';
import PieChartExample from '@/app/(finance_module)/dashboard/pieChartDashboard';

// const m = {"pharmacy" : PieChartExample}

export default function SelectComponent() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      {/* <Select label="Select an animal" className="max-w-xs">
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select> */}
      <Select className="max-w-xs">
        {menu.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
