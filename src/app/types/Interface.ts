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
// export interface PieChartRender {
//   salaries?: salaries[];
//   pharmacy?: pharmacy[];
//   equipments?: equipments[];
//   other_expenses?: other_expenses;
// }
export interface salaries {
  name: string;
  value: number;
}
export interface pharmacy {
  name: string;
  value: number;
}
export interface equipments {
  name: string;
  value: number;
}
export interface other_expenses {
  name: string;
  value: number;
}
