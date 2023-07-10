import { useState } from 'react';
import './App.css'
import Escena from './components/escenas/Escena'
import Bienvenida from './components/escenas/welcome'
import FondoImagenes from './components/escenas/fondoImagenes';
import { imagenes } from './components/escenas/imagenes';
import {frases} from './components/frases/frases.tsx'
import {ButtonsSelector} from "./components/styled-components/styled-div";

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
      <FondoImagenes indiceImagen={indiceFraseResaltada} imagenes={imagenes} />
      <ButtonsSelector onClick={handleAnteriorClick}>Previous</ButtonsSelector>
      <ButtonsSelector onClick={handleSiguienteClick}>Next</ButtonsSelector>
      <Escena frases={frases} indiceFraseResaltada={indiceFraseResaltada} />
    </>
  );
}

export default App;
