import { useAppDispatch } from '@/hooks';
import { useUpdateRowMutation } from '@/services';
import { TableRow, TableCell } from '@mui/material';
import { useState } from 'react';
import { RowControlPanel, StyledTableCell, StyledTextField } from '..';
import { RowEditProps } from './RowEdit.types';
import css from './RowEdit.module.scss';
import { updateStoredRow } from '@/store/slices';

export default function RowEdit({
  level,
  rowData,
  setActiveEditRowID,
}: RowEditProps) {
  
  const dispatch = useAppDispatch();
  const [updatedRow] = useUpdateRowMutation();
  const [inputValues, setInputValues] = useState({
    rowName: rowData.rowName,
    salary: rowData.salary,
    equipmentCosts: rowData.equipmentCosts,
    overheads: rowData.overheads,
    estimatedProfit: rowData.estimatedProfit,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setActiveEditRowID && setActiveEditRowID(null);

      try {
        const updateResponse = await updatedRow({
          body: {
            ...inputValues,

            // Unused fields
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            supportCosts: 0,
          },
          rowID: rowData.id,
        });
        if (updateResponse.data) {
          dispatch(
            updateStoredRow({
              rowID: rowData.id,
              updatedRow: updateResponse.data.current,
            })
          );
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <TableRow>
      <TableCell style={{ paddingLeft: `${level * 16}px` }} align="left">
        <div className={`${level > 1 && css.node}`}></div>
        <RowControlPanel rowID={rowData.id} />
      </TableCell>
      <StyledTableCell align="left">
        <StyledTextField
          type="text"
          name="rowName"
          value={inputValues.rowName}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </StyledTableCell>
      <TableCell align="left">
        <StyledTextField
          type="number"
          name="salary"
          value={inputValues.salary}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </TableCell>
      <TableCell align="left">
        <StyledTextField
          type="number"
          name="equipmentCosts"
          value={inputValues.equipmentCosts}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </TableCell>
      <TableCell align="left">
        <StyledTextField
          type="number"
          name="overheads"
          value={inputValues.overheads}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </TableCell>
      <TableCell align="left">
        <StyledTextField
          type="number"
          name="estimatedProfit"
          value={inputValues.estimatedProfit}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </TableCell>
    </TableRow>
  );
}
