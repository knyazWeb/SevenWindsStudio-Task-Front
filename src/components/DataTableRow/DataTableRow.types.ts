export type RowDataT = {
  id: number;
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: RowDataT[];
};

export type DataTableRowProps = {
  rowData: RowDataT;
  level: number;
  setActiveInputRowParentID: (id: number) => void;
  setActiveEditRowID: (id: number) => void;
};
