import { useEffect } from "react";
import imagen1 from '../../assets/img/1.jpg';
import imagen2 from '../../assets/img/2.jpg';
import imagen3 from '../../assets/img/3.jpg';
import imagen4 from '../../assets/img/4.jpg';

const imagenes = [imagen1, imagen2, imagen3, imagen4];

interface FondoImagenesProps {
  indiceImagen: number;
}

const FondoImagenes = (props: FondoImagenesProps) => {
  const { indiceImagen } = props;

  useEffect(() => {
    const imagenFondo = imagenes[indiceImagen % imagenes.length].split('/').pop();
    document.body.style.backgroundImage = `url(/Sprint6/dist/assets/${imagenFondo})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, [indiceImagen]);

  return null;
};

export default FondoImagenes;
