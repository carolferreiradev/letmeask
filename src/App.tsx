import { Router } from './routes/index';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from '../src/styles/global';
import SwitchButtonTheme from './components/SwitchButtonTheme';
import usePersitedState from './hooks/usePersisteStated'


function App() {
  const [theme, setTheme] = usePersitedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <SwitchButtonTheme toggleTheme={toggleTheme} />
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
