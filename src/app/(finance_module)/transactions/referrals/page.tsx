'use client';
import { Card, CardBody } from '@nextui-org/react';
import React, { useState } from 'react';
import { MdCurrencyRupee } from 'react-icons/md';
import { DateRangePicker } from '@nextui-org/react';
import DynamicTable from '@/app/components/dynamicTable/DynamicTable';

const ReferralPage = () => {
  return (
    <div className="p-4">
      <Card className="bg-blue-800 text-white">
        <CardBody>
          <div className="flex justify-between py-4 px-6">
            <p className="font-bold text-large ml-4 flex items-center justify-center">
              Referrals
            </p>

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
      <div className="mt-5 p-4">
        <DynamicTable />
      </div>
    </div>
  );
};

export default ReferralPage;
