import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import css from './RowControlPanel.module.scss';
import { useState, useCallback } from 'react';
import { RowControlPanelProps } from './RowControlPanel.types';
import { useRemoveRowMutation } from '@/services';
import { useAppDispatch } from '@/hooks';
import { removeStoredRow } from '@/store/slices';

export default function RowControlPanel({
  rowID,
  setActiveInputRowParentID,
}: RowControlPanelProps) {
  
  const [isHovered, setIsHovered] = useState(false);
  const [removeRow] = useRemoveRowMutation();
  const dispatch = useAppDispatch();

  const deleteRow = useCallback(async () => {
    if (rowID) {
      const removeResponse = await removeRow({ rowID });
      dispatch(removeStoredRow({ rowID }));
    }
  }, [rowID, removeRow, dispatch]);

  return (
    <div
      style={{ backgroundColor: `${isHovered ? '#414144' : 'transparent'}` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={css.wrapper}
    >
      <button
        type="button"
        onClick={() => {
          setActiveInputRowParentID &&
            rowID &&
            setActiveInputRowParentID(rowID);
        }}
        className={`${css.item} ${
          (!isHovered && css.node_placeholder) || css.node_placeholder_active
        }`}
      >
        <DescriptionIcon className={css.new_row} />
      </button>

      <button
        onClick={deleteRow}
        type="button"
        style={{ opacity: `${isHovered ? '100%' : '0%'}` }}
        className={css.item}
      >
        <DeleteIcon className={css.delete} />
      </button>
    </div>
  );
}
