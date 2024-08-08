import {
  AppBar,
  Container,
  IconButton,
  styled,
  Tab,
  Tabs,
  Toolbar,
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';

const StyledAppBar = styled(AppBar)`
  background-color: #272729;
`;

const StyledTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    gap: 30px;
  }
  .MuiTabs-indicator {
    background-color: #fff;
  }
`;

const StyledTab = styled(Tab)`
  display: block;
  padding: 0;
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

export default function TopBar() {
  return (
    <StyledAppBar position="static" color="default">
      <Container maxWidth="xl" disableGutters={false}>
        <StyledTabs value={2}>
          <StyledTab icon={<AppsIcon />} />
          <StyledTab icon={<ReplyIcon />} />
          <StyledTab label="Просмотр" />
          <StyledTab label="Управление" />
        </StyledTabs>
      </Container>
    </StyledAppBar>
  );
}
