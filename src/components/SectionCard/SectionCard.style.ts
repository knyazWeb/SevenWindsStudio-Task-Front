import { COLORS } from '@/styles';
import { Card, Box, Typography, styled } from '@mui/material';

export const StyledCard = styled(Card)`
  background-color: ${COLORS.bgPrimary};
  background-image: none;
  color: white;
  width: fit-content;
  height: 100%;
  box-shadow: none;
  padding: 0 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const StyledCardHeader = styled(Box)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledCardTitle = styled(Typography)`
  font-size: 1.25rem;
`;
