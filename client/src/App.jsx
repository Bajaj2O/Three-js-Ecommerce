import GCanvas from '../components/Canvas';
import Home from './pages/Home';
import Customizer from './pages/Customiser';
import Data from './pages/Data';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Customizer/>
      <GCanvas />
      <Data/>
    </main>
  )
}

export default App