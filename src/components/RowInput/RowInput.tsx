import { TableRow, TableCell } from '@mui/material';
import { StyledTableCell, StyledTextField } from './RowInput.style';
import { useAppDispatch } from '@/hooks';
import { useCreateRowMutation } from '@/services';
import { createStoredRow } from '@/store/slices';
import { RowControlPanel } from '../RowControlPanel';
import { useState } from 'react';
import { RowInputProps } from './RowInput.types';
import css from './RowInput.module.scss';

export default function RowInput({
  parentID,
  level,
  setActiveInputRowParentID,
}: RowInputProps) {
  
  const dispatch = useAppDispatch();
  const [createRow] = useCreateRowMutation();
  const [inputValues, setInputValues] = useState({
    rowName: '',
    salary: 0,
    equipmentCosts: 0,
    overheads: 0,
    estimatedProfit: 0,
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
      setActiveInputRowParentID && setActiveInputRowParentID(null);

      try {
        const createResponse = await createRow({
          ...inputValues,
          parentId: parentID,

          // Unused fields
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          supportCosts: 0,
        });
        if (createResponse.data) {
          dispatch(
            createStoredRow({
              parentID: parentID,
              newRow: createResponse.data.current,
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
        <RowControlPanel />
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
