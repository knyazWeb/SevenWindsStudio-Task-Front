import { RowDataT } from '..';

export type RowEditProps = {
  level: number;
  rowData: RowDataT;
  setActiveEditRowID: (id: number | null) => void;
};
