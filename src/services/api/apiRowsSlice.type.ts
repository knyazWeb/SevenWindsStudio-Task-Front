// Create entity action
export type EntityResponseT = {
  id: number;
  rowName: string;
};

// Get list action
export type ListResponseT = {
  // types child array
  child: any[];
  id: number;
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  supportCosts: number;
  total: number;
};

// Create action
export type CreateRowRequestT = {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  parentId: number | null;

  // will be 0
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  supportCosts: number;
};

export type CreateRowResponseT = {
  // types changed array
  changed: any[];
  current: {
    id: number;
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    supportCosts: number;
    total: number;
  };
};

// Update action
export type UpdateRowRequestT = {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;

  // will be 0
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  supportCosts: number;
};


