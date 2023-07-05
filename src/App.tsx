import { useState } from 'react';
import './App.css'
import Escena from './components/escenas/Escena'
import frases from './components/frases/frases.json'
import {ButtonsSelector} from "./components/styled-components/styled-div";
import FondoImagenes from './components/styled-components/fondoImagenes';
import Bienvenida from './components/escenas/welcome'

const imagenesFondo = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg'
];

const App = () => {
  const [indiceFraseResaltada, setIndiceFraseResaltada] = useState(0);
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  const handleAnteriorClick = () => {
    setIndiceFraseResaltada(indiceFraseResaltada => (indiceFraseResaltada - 1 + frases.length) % frases.length);
  };

  const handleSiguienteClick = () => {
    setIndiceFraseResaltada(indiceFraseResaltada => (indiceFraseResaltada + 1) % frases.length);
  };

  if (mostrarBienvenida) {
    return <Bienvenida onContinuar={() => setMostrarBienvenida(false)} />;
  }

  return (
    <>
      <FondoImagenes indiceImagen={indiceFraseResaltada} imagenes={imagenesFondo} />
      <ButtonsSelector onClick={handleAnteriorClick}>Anterior</ButtonsSelector>
      <ButtonsSelector onClick={handleSiguienteClick}>Siguiente</ButtonsSelector>
      <Escena frases={frases} indiceFraseResaltada={indiceFraseResaltada} />
    </>
  );
}

export default App;
