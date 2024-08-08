import { Box, Divider, Icon, List } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  DrawerHeader,
  DrawerTypography,
  StyledDrawer,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from './SideBar.style';

const menuItems = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты',
];

export default function SideBar() {
  return (
    <StyledDrawer variant="permanent">
      <DrawerHeader>
        <Box>
          <DrawerTypography variant="body1" noWrap>
            Название проекта
          </DrawerTypography>
          <DrawerTypography fontSize={12}>Аббревиатура</DrawerTypography>
        </Box>
        <Box />
        <Icon>
          <ExpandMoreIcon />
        </Icon>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((text, index) => (
          <StyledListItem key={index} selected={text === 'СМР'}>
            <StyledListItemButton>
              <StyledListItemIcon>
                <Icon>
                  <DashboardIcon />
                </Icon>
              </StyledListItemIcon>
              <StyledListItemText primary={text} />
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
}
