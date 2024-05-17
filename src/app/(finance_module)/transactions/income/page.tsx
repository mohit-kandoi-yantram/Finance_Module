'use client';
import { Card, CardBody } from '@nextui-org/react';
import React, { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { MdCurrencyRupee } from 'react-icons/md';
import { DateRangePicker } from '@nextui-org/react';
import CustomTable from '@/app/components/customTableIncomeScreen/App';
import Popup from '../../../components/customTableIncomeScreen/addIncomeForm/popup';

const IncomePage = () => {
  // const [openPopup, setOpenPopup] = useState();
  const [totalIncome, setTotalIncome] = useState(150558000.0);
  return (
    <div className="p-4">
      <Card className="bg-blue-800 text-white">
        <CardBody>
          <div className="flex justify-between py-4 px-6">
            <div className="flex flex-col items-center gap-4">
              <p className="font-bold text-large ml-4">Total Balance</p>
              <div className="flex items-center ml-4">
                <div className="mr-2">
                  <MdCurrencyRupee size={20} />
                </div>
                <div className="text-large">{totalIncome}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="cursor-pointer text-black rounded-3xl px-2 border border-black bg-white hover:bg-orange-400 size-fit">
                Today
              </div>
              <div>
                <DateRangePicker
                  label="Select Range"
                  className="max-w-xs"
                  variant="bordered"
                  visibleMonths={2}
                  pageBehavior="single"
                  classNames={{
                    inputWrapper: 'bg-white',
                    label: 'bg-white text-black',
                  }}
                />
                {/* <FaCalendarAlt /> */}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="p-4">
        <CustomTable />
        {/* <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} /> */}
      </div>
    </div>
  );
};

export default IncomePage;
