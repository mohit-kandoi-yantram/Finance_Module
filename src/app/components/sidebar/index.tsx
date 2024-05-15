'use client';
import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { GiOrganigram } from 'react-icons/gi';
import { IoMdPerson } from 'react-icons/io';
import { FaPeopleArrows } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { SidebarItems, SubItems } from '../../types/Interface';
import SidebarItem from './items';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { FaBookOpen } from 'react-icons/fa6';
import { MdContentPasteSearch } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';

const items: SidebarItems[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: MdDashboard,
    items: [
      {
        name: 'Income',
        path: '/dashboard/income',
        icon: RiMoneyRupeeCircleLine,
      },
      {
        name: 'Expenses',
        path: '/dashboard/expenses',
        icon: FaBookOpen,
      },
    ],
  },
  {
    name: 'Referrals',
    path: '/referrals',
    icon: MdContentPasteSearch,
  },
  {
    name: 'Profile',
    path: '/profiles',
    icon: IoMdPerson,
  },
  {
    name: 'Help',
    path: '/help',
    icon: AiOutlineQuestionCircle,
  },
  {
    name: 'Logout',
    path: '/logout',
    icon: IoIosLogOut,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-52 shadow-lg z-10 ">
      <div className="flex justify-center items-center bg-white">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQERWgqpQAfvww/company-logo_200_200/0/1639741901981?e=2147483647&v=beta&t=lKPRZ6GRlKFOShej0j5hPsWKZb7FMFDnSQqOCMaqa_E"
          alt="logo"
          className="h-28 "
        />
      </div>
      <div className="flex flex-col space-y-10 w-full h-full pb-20 p-4 text-center bg-blue-800 rounded-3xl">
        <div className="flex flex-col space-y-1">
          {items.map((item, index) => {
            if (index < 2) {
              return <SidebarItem key={item.path} item={item} />;
            }
          })}
        </div>
        <div className="fixed bottom-0 left-0 p-4 border-t border-white w-52 flex flex-col space-y-1">
          {items.map((item, index) => {
            if (index > 1) {
              return <SidebarItem key={item.path} item={item} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
