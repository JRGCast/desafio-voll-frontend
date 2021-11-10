import { LinearProgress } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
const AppRoutes = lazy(() => import('./routes/Routes'));


function App() {
  return (
    <div
      style={ {
        height: '100%',
        width: '100%'
      } }>
      <header >
        <nav>
          <NavBar />
        </nav>
      </header>
      <section style={ { marginTop: '7em' } }>
        <section>
          <Suspense fallback={ <LinearProgress /> }>
            <AppRoutes />
          </Suspense >
        </section>
      </section>
    </div>
  );
}

export default App;
