import { LinearProgress } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import theme from './styles/themeStyles';
const Routes = lazy(() => import('./routes/Routes'));


function App() {
  return (
    <ThemeProvider theme={ theme }>
      <div
        style={ {
          background: theme.palette.background.default,
          height: '100%',
          width: '100%'
        } }>
        <header>
        {console.log(theme.palette)}
          <nav>
            <NavBar theme={theme} />
          </nav>
        </header>
        <main style={ {
         marginTop: '50em'
        } }>
          <section>
            <Suspense fallback={ <LinearProgress /> }>
              <Routes />
            </Suspense >
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
