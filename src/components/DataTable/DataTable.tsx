import { Paper, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { StyledTableCell, StyledTableContainer } from './DataTable.style';
import { Fragment, useCallback, useState } from 'react';
import { useGetRowsQuery } from '@/services';
import { DataTableRow, RowDataT, RowInput, RowSkeleton } from '..';
import { useAppSelector } from '@/hooks';
import { RowEdit } from '../RowEdit';

export default function DataTable() {
  
  // RTK is caching this rows
  const { isLoading } = useGetRowsQuery();
  const ALL_ROWS = useAppSelector((state) => state.rows);
  console.log(ALL_ROWS);
  
  const [activeInputRowParentID, setActiveInputRowParentID] = useState<
    number | null
  >(null);
  const [activeEditRowID, setActiveEditRowID] = useState<number | null>(null);

  const renderRow = useCallback(
    (rowData: RowDataT, level: number = 1) => (
      <Fragment key={rowData.id}>
        {activeEditRowID === rowData.id ? (
          <RowEdit
            setActiveEditRowID={setActiveEditRowID}
            rowData={rowData}
            level={level}
          />
        ) : (
          <DataTableRow
            setActiveEditRowID={setActiveEditRowID}
            setActiveInputRowParentID={setActiveInputRowParentID}
            rowData={rowData}
            level={level}
          />
        )}
        {rowData.child?.length > 0 &&
          rowData.child.map((childRow) => renderRow(childRow, level + 1))}
        {activeInputRowParentID === rowData.id && (
          <RowInput
            setActiveInputRowParentID={setActiveInputRowParentID}
            parentID={activeInputRowParentID}
            level={level + 1}
          />
        )}
      </Fragment>
    ),
    [activeInputRowParentID, activeEditRowID]
  );

  return (
    <StyledTableContainer as={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Уровень</StyledTableCell>
            <StyledTableCell align="left">Наименование работ</StyledTableCell>
            <StyledTableCell align="left">Основная з/п</StyledTableCell>
            <StyledTableCell align="left">Оборудование</StyledTableCell>
            <StyledTableCell align="left">Накладные расходы</StyledTableCell>
            <StyledTableCell align="left">Сметная прибыль</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(isLoading && <RowSkeleton />) ||
            (ALL_ROWS?.length && ALL_ROWS.map((row) => renderRow(row))) || (
              <RowInput parentID={null} level={1} />
            )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
