import { TableRow, TableCell, Skeleton } from '@mui/material';

export default function RowSkeleton() {
  return (
    <TableRow>
      <TableCell align="left">
        <Skeleton variant="rectangular" height={30} />
      </TableCell>
      <TableCell align="left">
        <Skeleton variant="rectangular" height={30} />
      </TableCell>
      <TableCell align="left">
        <Skeleton variant="rectangular" height={30} />
      </TableCell>
      <TableCell align="left">
        <Skeleton variant="rectangular" height={30} />
      </TableCell>
      <TableCell align="left">
        <Skeleton variant="rectangular" height={30} />
      </TableCell>
      <TableCell align="left">
        <Skeleton variant="rectangular" height={30} />
      </TableCell>
    </TableRow>
  );
}
