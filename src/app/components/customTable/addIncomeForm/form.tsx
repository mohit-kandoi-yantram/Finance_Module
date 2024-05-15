// components/FormComponent.tsx
'use client';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import { ChangeEvent, SetStateAction, useState } from 'react';
// import { FormData } from '@/app/type/interface';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

const payerList = [
  {
    key: 0,
    name: 'xxxx001',
  },
  { key: 1, name: 'xxxx002' },
  { key: 2, name: 'xxxx003' },
];
const payeeList = [
  {
    key: 0,
    name: 'yyyy001',
  },
  { key: 1, name: 'yyyy002' },
  { key: 2, name: 'yyyy003' },
];

const payStatusList = [
  {
    key: 0,
    name: 'Approved',
  },
  { key: 1, name: 'Rejected' },
  { key: 2, name: 'On-Hold' },
  { key: 3, name: 'Pending' },
];
const payPurposeList = [
  {
    key: 0,
    name: 'Salary',
  },
  { key: 1, name: 'Equipments' },
  { key: 2, name: 'Beds' },
  { key: 3, name: 'Other' },
];

export default function InputForm(props: { setOpenPopup: any }) {
  const { setOpenPopup } = props;
  const { register, handleSubmit } = useForm<FormData>();
  const [inputValue, setInputValue] = useState({});

  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2"
      >
        <Input
          type="text"
          name="payeeName"
          label="Payee Name"
          labelPlacement="outside-left"
          placeholder="Enter Payee's name"
          onChange={handleInputChange}
          variant="bordered"
        />

        <div>
          <Autocomplete
            allowsCustomValue
            label="Payer Acc No."
            labelPlacement="outside-left"
            variant="bordered"
            className="max-w-xs"
            defaultItems={payerList}
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.name}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div>
          <Autocomplete
            allowsCustomValue
            label="Payee Acc No."
            labelPlacement="outside-left"
            variant="bordered"
            className="max-w-xs"
            defaultItems={payeeList}
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.name}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>

        <Input
          type="text"
          name="bankName"
          label="Bank Name"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Bank Name"
          onChange={handleInputChange}
          fullWidth
        />
        <Input
          type="text"
          name="branchName"
          label="Branch Name"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Branch Name"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="ifscCode"
          label="IFSC Code"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter IFSC Code"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="transactionId"
          label="Transaction ID"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Transaction ID"
          onChange={handleInputChange}
        />
        <div>
          <Autocomplete
            allowsCustomValue
            label="Pay Status."
            labelPlacement="outside-left"
            variant="bordered"
            className="max-w-xs"
            defaultItems={payStatusList}
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.name}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div>
          <Autocomplete
            allowsCustomValue
            label="Pay Purpose"
            labelPlacement="outside-left"
            variant="bordered"
            className="max-w-xs"
            defaultItems={payPurposeList}
          >
            {(item) => (
              <AutocompleteItem key={item.key}>{item.name}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>

        <div className="flex justify-between gap-2">
          <div className="mt-8 mr-4">
            <Button
              className="bg-white text-blue-800 border border-blue-800 rounded-md"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              className="bg-blue-800 text-white border rounded-md mt-8 ml-4"
              type="submit"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
