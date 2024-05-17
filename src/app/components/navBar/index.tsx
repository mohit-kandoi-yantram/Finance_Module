'use client';
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="flex">
      {/* Search Box */}

      <div className="basis-3/5">
        <Card className=" shadow-small rounded-full ">
          <CardBody>
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> */}
            <div className="flex">
              <div className="mt-2 mr-2">
                <svg
                  className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              {/* </div> */}
              <div className="w-full">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  className=" w-full p-1 focus:outline-none focus:border-transparent"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/*  Profile Section */}

      <div className="basis-2/5">
        <Card className=" rounded-3xl h-full shadow-small">
          <CardBody className="flex flex-row justify-end">
            {/* Profile Picture */}
            <div>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="profile picture"
                    className="size-8 rounded-full"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            {/* <p className="text-black text-right">Profile</p> */}
            {/* <p className=" text-center">{onDuty}</p> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
