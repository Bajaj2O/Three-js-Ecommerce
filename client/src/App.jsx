import CanvasModel from './canvas'
import Home from './pages/Home'
import Customiser from './pages/Customiser'
// import './App.css'


function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customiser />
    </main>
  )
}

export default App
