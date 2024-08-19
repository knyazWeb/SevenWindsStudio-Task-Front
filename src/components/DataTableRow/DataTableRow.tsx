import { TableCell, TableRow } from '@mui/material';
import { DataTableRowProps } from './DataTableRow.types';
import { formatNumberByDigits } from './DataTableRow.service';
import { RowControlPanel } from '../RowControlPanel';
import css from './DataTableRow.module.scss';

export default function DataTableRow({
  rowData,
  level,
  setActiveInputRowParentID,
  setActiveEditRowID,
}: DataTableRowProps) {
  return (
    <TableRow onDoubleClick={() => setActiveEditRowID(rowData.id)}>
      <TableCell
        align="left"
        style={{ paddingLeft: `${level * 16}px`, width: '10%' }}
      >
        <div className={`${level > 1 && css.node}`}></div>
        <RowControlPanel
          rowID={rowData.id}
          setActiveInputRowParentID={setActiveInputRowParentID}
        />
      </TableCell>
      <TableCell className={css.main_row} align="left">
        <div className={css.row_name}>{rowData.rowName}</div>
      </TableCell>
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
