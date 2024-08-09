import { COLORS } from '@/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { formatNumberByDigits } from './DataTable.service';
import { RowDataT } from './DataTable.type';
import { StyledTableCell, StyledTableContainer } from './DataTable.style';
import { Fragment, useCallback, useState } from 'react';

// Will be stored in the store
const ROWS_DATA: RowDataT[] = [
  {
    workName: 'Work 1',
    basicSalary: 1000,
    equipment: 500,
    expenses: 200,
    estimatedProfit: 300,
    children: [
      {
        workName: 'Work 2',
        basicSalary: 1500,
        equipment: 800,
        expenses: 300,
        estimatedProfit: 500,
        children: [
          {
            workName: 'Work 3',
            basicSalary: 1200,
            equipment: 600,
            expenses: 250,
            estimatedProfit: 400,
            children: [],
          },
        ],
      },
    ],
  },
];

export default function DataTable() {
  
  const renderRow = useCallback(
    (rowData: RowDataT, level: number = 1) => (
      <Fragment key={rowData.workName}>
        <TableRow>
          <TableCell align="left" style={{ paddingLeft: `${level * 16}px` }}>
            {level}
          </TableCell>
          <TableCell align="left">{rowData.workName}</TableCell>
          <TableCell align="left">
            {formatNumberByDigits(rowData.basicSalary)}
          </TableCell>
          <TableCell align="left">
            {formatNumberByDigits(rowData.equipment)}
          </TableCell>
          <TableCell align="left">
            {formatNumberByDigits(rowData.expenses)}
          </TableCell>
          <TableCell align="left">
            {formatNumberByDigits(rowData.estimatedProfit)}
          </TableCell>
        </TableRow>
        {rowData.children?.length > 0 &&
          rowData.children.map((childRow) => renderRow(childRow, level + 1))}
      </Fragment>
    ),
    []
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
        <TableBody>{ROWS_DATA.map((rowData) => renderRow(rowData))}</TableBody>
      </Table>
    </StyledTableContainer>
  );
}
