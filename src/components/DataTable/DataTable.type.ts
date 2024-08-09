export type RowDataT = {
  workName: string;
  basicSalary: number;
  equipment: number;
  expenses: number;
  estimatedProfit: number;
  children: RowDataT[];
};