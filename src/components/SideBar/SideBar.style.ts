import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { COLORS } from '@/styles';

export const StyledDrawer = styled(Drawer)`
  height: 100%;

  .MuiDrawer-paper {
    width: 300px;
    box-sizing: border-box;
    background-color: ${COLORS.bgPrimary};
    color: #ffffff;
    position: static;
  }
`;

export const DrawerHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
`;

export const DrawerTypography = styled(Typography)`
  color: ${COLORS.textSecondary};
`;

export const StyledListItemButton = styled(ListItemButton)`
  padding: 0;
  gap: 15px;
  align-items: center;
`;

export const StyledListItem = styled(ListItem)`
  padding-top: 5px;
  padding-bottom: 5px;

  &.Mui-selected {
    background-color: #a1a1aa;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 0px;
  height: auto;
`;

export const StyledListItemText = styled(ListItemText)`
  margin-bottom: 0;
`;
