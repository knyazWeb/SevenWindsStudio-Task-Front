import { AppBar, Container, styled, Tab, Tabs } from '@mui/material';
import { COLORS } from '@/styles';

export const StyledAppBar = styled(AppBar)`
  background-color: ${COLORS.bgPrimary};
  background-image: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

export const StyledContainer = styled(Container)`
  padding-left: 16px;
  padding-right: 16px;
`;


export const StyledTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    gap: 30px;
  }
  .MuiTabs-indicator {
    background-color: #fff;
  }
`;

export const StyledTab = styled(Tab)`
  display: block;
  padding: 3px;
  width: fit-content;
  text-align: start;
  width: fit-content;
  min-width: 0;
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
  &.Mui-selected {
    color: #fff;
  }
`;