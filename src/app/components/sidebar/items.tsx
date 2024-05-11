'use client';
import React, { useMemo, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { SidebarItems, SubItems } from '../../types/Interface';
import { usePathname, useRouter } from 'next/navigation';
import SubMenuItem from './submenu-items';

const SidebarItem = ({ item }: { item: SidebarItems }) => {
  const [expanded, setExpanded] = useState(false);
  const { name, icon: Icon, path, items } = item;
  const router = useRouter();
  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }
    router.push(path);
  };

  const pathname = usePathname();
  const isActive = useMemo(() => {
    // console.log('path: ' + path + ' pathname: ' + pathname);
    return path.split('/')[1] === pathname.split('/')[1];
    // READ ABOUT REDUX OR RECOIL
  }, [path, pathname]);
  return (
    <>
      <div
        className={`flex items-center justify-between space-x-2 p-2 bg-blue-800 text-white rounded-full hover:bg-orange-400 cursor-pointer ${
          isActive && 'bg-orange-400'
        }`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <p className="text-sm">{name}</p>
        </div>
        <div>
          {items && items.length > 0 && (
            <BiChevronDown
              className={expanded ? 'rotate-180 duration-200' : ''}
            />
          )}
        </div>
      </div>

      {expanded &&
        items &&
        items.length > 0 &&
        items.map((item) => <SubMenuItem key={item.path} item={item} />)}
    </>
  );
};

export default SidebarItem;
