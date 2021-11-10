import { LinearProgress } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
const Routes = lazy(() => import('./routes/Routes'));


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
            <Routes />
          </Suspense >
        </section>
      </section>
    </div>
  );
}

export default App;
