import { RowDataT } from '@/components';
import { NewRowT } from './rowsSlice.types';

export function removeRowById(rows: RowDataT[], rowID: number): RowDataT[] {
  return rows
    .filter((row) => row.id !== rowID)
    .map((row) => {
      if (row.child) {
        row.child = removeRowById(row.child, rowID);
      }
      return row;
    });
}

export function createRowByParentID(
  rows: RowDataT[],
  newRow: NewRowT,
  parentID: number | null
): RowDataT[] {
  const convertedNewRow = {
    id: newRow.id,
    rowName: newRow.rowName,
    salary: newRow.salary,
    equipmentCosts: newRow.equipmentCosts,
    overheads: newRow.overheads,
    estimatedProfit: newRow.estimatedProfit,
    child: [],
  };
  if (parentID === null) {
    return [convertedNewRow];
  }
  return rows.map((row) => {
    if (row.id === parentID) {
      row.child.push(convertedNewRow);
    } else if (row.child) {
      row.child = createRowByParentID(row.child, newRow, parentID);
    }
    return row;
  });
}

export function findRowById(
  rows: RowDataT[],
  rowID: number
): RowDataT | undefined {
  for (const row of rows) {
    if (row.id === rowID) {
      return row;
    }
    if (row.child) {
      const found = findRowById(row.child, rowID);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}
