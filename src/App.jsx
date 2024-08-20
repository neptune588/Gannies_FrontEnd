import GlobalStyles from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
