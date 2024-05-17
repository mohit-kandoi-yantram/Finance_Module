import React, { useRef, useState } from 'react';
import { ReactToPrint } from 'react-to-print';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from '@nextui-org/react';
import { columns, rows } from '../dynamicTable/data';
import { PlusIcon } from './PlusIcon';
import { IoPrint } from 'react-icons/io5';
import Popup from '../../(finance_module)/transactions/referrals/addReferralForm/popup';
export default function DynamicTable() {
  const [openPopup, setOpenPopup] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-around gap-3 items-end">
          <p>External Referrals</p>
          <p>Internal Referrals</p>
          <Button
            color="primary"
            endContent={<PlusIcon />}
            onClick={() => setOpenPopup(true)}
          >
            Add Referral
          </Button>
          <ReactToPrint
            trigger={() => {
              return <IoPrint size={20} />;
            }}
            content={() => componentRef.current}
          />
        </div>
      </div>
    );
  }, []);
  return (
    <>
      <Table
        ref={componentRef}
        aria-label="Example table with dynamic content"
        topContent={topContent}
        topContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  );
}
