import '@/styles/globals.scss';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { TopBar } from '@/components';

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
    </ThemeProvider>
  );
}
