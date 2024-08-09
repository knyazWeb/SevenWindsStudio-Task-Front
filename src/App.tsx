import '@/styles/globals.scss';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { SectionMenu, SideBar, Table, TopBar } from '@/components';
import { MainWrapper } from './components/MainWrapper';

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
      <MainWrapper>
        <Grid container height="100%">
          <Grid item xs="auto">
            <SideBar />
          </Grid>
          <Grid item xs>
            <SectionMenu />
            <Table />
          </Grid>
        </Grid>
      </MainWrapper>
    </ThemeProvider>
  );
}
