import { StyledCard, StyledCardHeader, StyledCardTitle } from './SectionCard.style';
import { SectionCardProps } from './SectionCard.types';

export default function SectionCard({ title }: SectionCardProps) {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle variant="h5">{title}</StyledCardTitle>
      </StyledCardHeader>
    </StyledCard>
  );
}
