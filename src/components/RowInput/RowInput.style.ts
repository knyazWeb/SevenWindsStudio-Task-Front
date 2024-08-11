import { TextField, TableCell, styled } from "@mui/material";

export const StyledTextField = styled(TextField)`
  width: 100%;
  input {
    padding: 5px 5px;
  }
`;

export const StyledTableCell = styled(TableCell)`
  &:nth-of-type(2) {
    width: 30%; // Устанавливаем ширину второй ячейки
  }
`;
