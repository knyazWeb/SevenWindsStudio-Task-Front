import { COLORS } from '@/styles';
import { Card } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  background-color: ${COLORS.bgPrimary};
  background-image: none;
  width: 100%;
  height: 52.5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: none;
  border-radius: 0;
`;
