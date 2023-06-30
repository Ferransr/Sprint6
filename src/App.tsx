import './App.css'
import Escena from './components/escenas/Escena'
import frases from './components/frases/frases.json'

const App: React.FC = () => {
  return (
    <Escena frases={frases} />
  );
}

export default App;