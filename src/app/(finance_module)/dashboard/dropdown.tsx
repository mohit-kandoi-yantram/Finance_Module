import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

interface DropdownSelectProps {}
type Selection = Set<string>;

const DropdownSelect: React.FC<DropdownSelectProps> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(['Salaries'])
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        // onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="salary">Salaries</DropdownItem>
        <DropdownItem key="pharmacy">Pharmacy</DropdownItem>
        <DropdownItem key="equipment">Equipment</DropdownItem>
        <DropdownItem key="other_expenses">Other Expenses</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownSelect;
