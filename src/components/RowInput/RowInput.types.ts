export type RowInputFormT = {
  rowName: string;
  salary: string;
  equipmentCosts: string;
  overheads: string;
  estimatedProfit: string;
};

export type RowInputProps = {
  parentID: number | null;
  level: number;
  setActiveInputRowParentID?: (id: number | null) => void;
};
