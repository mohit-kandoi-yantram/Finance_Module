import { Card, CardBody } from '@nextui-org/react';
import React, { useState } from 'react';
import { CashFlow } from '@/app/types/Interface';
import { MdCurrencyRupee } from 'react-icons/md';
import { LuArrowUpSquare } from 'react-icons/lu';

const CardComponent = ({ item }: { item: CashFlow }) => {
  const [negative, setNegative] = useState(false);
  const { name, value } = item;
  return (
    <div>
      <Card>
        <CardBody>
          <div className="flex gap-4 items-center">
            <div>
              <LuArrowUpSquare
                size={25}
                color={negative ? 'red' : 'green'}
                className={negative ? 'rotate-180' : ''}
              />
            </div>
            <div>
              <p>{name}</p>
              <div className="flex mt-1 gap-2 items-center">
                <MdCurrencyRupee />
                <div className="text-large">{value}</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
