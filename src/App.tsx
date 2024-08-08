import '@/styles/globals.scss';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { SectionMenu, SideBar, TopBar } from '@/components';

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
        <Grid item xs={'auto'}>
          <SideBar />
        </Grid>
        <Grid item xs>
          <SectionMenu />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
