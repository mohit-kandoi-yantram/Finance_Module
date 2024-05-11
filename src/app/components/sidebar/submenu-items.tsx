import { SubItems } from '@/app/types/Interface';
import React, { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const SubMenuItem = ({ item }: { item: SubItems }) => {
  const { name, icon: Icon, path } = item;

  const router = useRouter();
  const onClick = () => {
    router.push(path);
  };

  const pathname = usePathname();
  const isActive = useMemo(() => {
    console.log('path: ' + path + ' pathname: ' + pathname);
    return path.split('/')[2] === pathname.split('/')[2];
    // READ ABOUT REDUX OR RECOIL
  }, [path, pathname]);

  return (
    <div
      className={`flex items-center space-x-2 p-1 ml-10 bg-blue-800 text-white rounded-full hover:bg-orange-400 cursor-pointer ${
        isActive && 'bg-orange-400'
      }`}
      onClick={onClick}
    >
      <Icon size={20} />
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default SubMenuItem;
