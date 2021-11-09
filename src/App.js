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
      <header>
        <nav>
          <NavBar />
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
  );
}

export default App;
