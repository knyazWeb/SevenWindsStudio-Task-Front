import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';

import {
  StyledAppBar,
  StyledContainer,
  StyledTab,
  StyledTabs,
} from './TopBar.style';

export default function TopBar() {
  return (
    <StyledAppBar position="static">
      <StyledContainer maxWidth={false} disableGutters={false}>
        <StyledTabs value={2}>
          <StyledTab icon={<AppsIcon />} />
          <StyledTab icon={<ReplyIcon />} />
          <StyledTab label="Просмотр" />
          <StyledTab label="Управление" />
        </StyledTabs>
      </StyledContainer>
    </StyledAppBar>
  );
}
