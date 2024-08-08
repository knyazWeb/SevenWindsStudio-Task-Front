import { Box } from '@mui/material';
import { SectionCard } from '../SectionCard';
import { StyledCard } from './SectionMenu.style';

export default function SectionMenu() {
  return (
    <Box>
      <StyledCard>
        <SectionCard title="Строительно-монтажные работы" />
      </StyledCard>
    </Box>
  );
}
