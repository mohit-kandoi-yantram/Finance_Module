import { IconType } from 'react-icons';
export interface SidebarItems {
  name: string;
  path: string;
  icon: IconType;
  items?: SubItems[];
}

export interface SubItems {
  name: string;
  path: string;
  icon: IconType;
}

export interface CashFlow {
  id: number;
  name: string;
  value: number;
}
