'use client';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import { ChangeEvent, SetStateAction, useState } from 'react';

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
          name="dateTime"
          label="Date & Time"
          labelPlacement="outside-left"
          placeholder="Enter Date & Time"
          onChange={handleInputChange}
          variant="bordered"
        />

        <Input
          type="text"
          name="referralId"
          label="Referral ID"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Referral ID"
          onChange={handleInputChange}
          fullWidth
        />
        <Input
          type="text"
          name="referralName"
          label="Referral Name"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Referral Name"
          onChange={handleInputChange}
          fullWidth
        />
        <Input
          type="text"
          name="refAmtPer"
          label="Ref Amt %"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Ref Amt %"
          onChange={handleInputChange}
          fullWidth
        />
        <Input
          type="text"
          name="refAmt"
          label="Ref Amt "
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Ref Amt "
          onChange={handleInputChange}
          fullWidth
        />
        <Input
          type="text"
          name="dept"
          label="Dept"
          labelPlacement="outside-left"
          variant="bordered"
          placeholder="Enter Department"
          onChange={handleInputChange}
        />

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
