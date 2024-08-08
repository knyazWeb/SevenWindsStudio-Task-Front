import '@/styles/globals.scss';
import {
  Box,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@mui/material';
import { SideBar, TopBar } from '@/components';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <TopBar />
        <Grid container>
          <Grid item>
            <SideBar />
          </Grid>
        </Grid>
    </ThemeProvider>
  );
}
