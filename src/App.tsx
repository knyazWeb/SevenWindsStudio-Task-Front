import { SectionMenu, SideBar, Table, TopBar } from '@/components';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { MainWrapper } from './components/MainWrapper';
import { store } from './store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
