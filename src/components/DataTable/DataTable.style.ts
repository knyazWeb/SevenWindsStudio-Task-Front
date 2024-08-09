import { COLORS } from '@/styles';
import { styled, TableCell, TableContainer } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)`
  background-color: ${COLORS.bgSecondary};
  background-image: none;
  padding: 0 10px;
`;

export const StyledTableCell = styled(TableCell)`
  color: ${COLORS.textSecondary};
  padding: 8px 16px;
`;
