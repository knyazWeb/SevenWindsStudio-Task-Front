import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@mui/material';

import { StyledTableCell, StyledTableContainer } from './DataTable.style';
import { Fragment, useCallback, useEffect, useState } from 'react';
import {
  useCreateRowMutation,
  useGetRowsQuery,
  useRemoveRowMutation,
  useUpdateRowMutation,
} from '@/services';
import { DataTableRow, RowDataT, RowSkeleton } from '..';

// Will be stored in the store
//const ROWS_DATA: RowDataT[] = [
//  {
//    rowName: 'Work 1',
//    salary: 1000,
//    equipmentCosts: 500,
//    overheads: 200,
//    estimatedProfit: 300,
//    children: [
//      {
//        rowName: 'Work 2',
//        salary: 1500,
//        equipmentCosts: 800,
//        overheads: 300,
//        estimatedProfit: 500,
//        children: [
//          {
//            rowName: 'Work 3',
//            salary: 1200,
//            equipmentCosts: 600,
//            overheads: 250,
//            estimatedProfit: 400,
//            children: [],
//          },
//        ],
//      },
//    ],
//  },
//];

export default function DataTable() {
  const { data, isLoading, isSuccess } = useGetRowsQuery();
  console.log(data);
  const [removeRow] = useRemoveRowMutation();
  //const [updateRow] = useUpdateRowMutation();
  //const [createRow, { isLoading, isSuccess, isError }] = useCreateRowMutation();
  //useEffect(() => {
  //  const createNewRow = async () => {
  //    try {
  //      const response = await createRow({
  //        rowName: 'Test row 123',
  //        salary: 300,
  //        equipmentCosts: 300,
  //        overheads: 300,
  //        estimatedProfit: 300,
  //        parentId: null,
  //        machineOperatorSalary: 0,
  //        mainCosts: 0,
  //        materials: 0,
  //        mimExploitation: 0,
  //        supportCosts: 0,
  //      }).unwrap();
  //      console.log('Response data:', response);
  //      // Обработка данных ответа
  //    } catch (error) {
  //      console.error('Failed to create row:', error);
  //      // Обработка ошибки
  //    }
  //  };
  //useEffect(() => {
  //  const updateRowS = async () => {
  //    try {
  //      const response = await updateRow({
  //        body: {
  //          rowName: 'Test row 123 345',
  //          salary: 300,
  //          equipmentCosts: 300,
  //          overheads: 300,
  //          estimatedProfit: 300,
  //          machineOperatorSalary: 0,
  //          mainCosts: 0,
  //          materials: 0,
  //          mimExploitation: 0,
  //          supportCosts: 0,
  //        },
  //        rowID: 102683,
  //      }).unwrap();
  //      console.log('Response data:', response);
  //      // Обработка данных ответа
  //    } catch (error) {
  //      console.error('Failed to create row:', error);
  //      // Обработка ошибки
  //    }
  //  };

  //  updateRowS();
  //}, []);
  //useEffect(() => {
  //  const removeRowS = async () => {
  //    try {
  //      const response = await removeRow({
  //        rowID: 102684,
  //      }).unwrap();
  //      console.log('Response data:', response);
  //      // Обработка данных ответа
  //    } catch (error) {
  //      console.error('Failed to create row:', error);
  //      // Обработка ошибки
  //    }
  //  };

  //  removeRowS()

  //}, [])

  const renderRow = useCallback(
    (rowData: RowDataT, level: number = 1) => (
      <Fragment key={rowData.rowName}>
        <DataTableRow rowData={rowData} level={level} />
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
        <TableBody>
          {/*{ROWS_DATA.map((rowData) => renderRow(rowData))}*/}
          {isLoading && <RowSkeleton />}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
