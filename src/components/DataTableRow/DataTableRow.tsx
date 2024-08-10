import { TableCell, TableRow } from "@mui/material";
import { DataTableRowProps } from "./DataTableRow.type";
import { formatNumberByDigits } from "./DataTableRow.service";

export default function DataTableRow({rowData, level}: DataTableRowProps) {
  return (
    <TableRow>
      <TableCell align="left" style={{ paddingLeft: `${level * 16}px` }}>
        {level}
      </TableCell>
      <TableCell align="left">{rowData.rowName}</TableCell>
      <TableCell align="left">{formatNumberByDigits(rowData.salary)}</TableCell>
      <TableCell align="left">
        {formatNumberByDigits(rowData.equipmentCosts)}
      </TableCell>
      <TableCell align="left">
        {formatNumberByDigits(rowData.overheads)}
      </TableCell>
      <TableCell align="left">
        {formatNumberByDigits(rowData.estimatedProfit)}
      </TableCell>
    </TableRow>
  );
}
