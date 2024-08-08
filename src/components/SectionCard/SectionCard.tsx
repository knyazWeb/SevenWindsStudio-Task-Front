import { StyledCard, StyledCardHeader, StyledCardTitle } from './SectionCard.style';

type SectionCardProps = {
  title: string;
};

export default function SectionCard({ title }: SectionCardProps) {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle variant="h5">{title}</StyledCardTitle>
      </StyledCardHeader>
    </StyledCard>
  );
}
