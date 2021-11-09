import { lazy, Suspense } from 'react';
import './App.css';
const Routes = lazy(() => import('./routes/Routes'));

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Navbar</h1>
      </header>
      <section>
        <Suspense fallback={ <h1>Carregando...</h1> }>
          <Routes />
        </Suspense >
      </section>
    </main>
  );
}

export default App;
