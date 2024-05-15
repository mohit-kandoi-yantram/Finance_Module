import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { menu } from './data';

export default function SelectComponent(props: any) {
  const { selectedItem, setSelectedItem } = props;
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        className="max-w-xs"
        defaultSelectedKeys={selectedItem}
        onSelectionChange={setSelectedItem}
      >
        {menu.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
