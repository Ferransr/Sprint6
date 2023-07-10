import { useEffect } from "react";

interface FondoImagenesProps {
  indiceImagen: number;
  imagenes: string[];
}

const FondoImagenes = (props: FondoImagenesProps) => {
  const { indiceImagen, imagenes } = props;

  useEffect(() => {
    const imagenFondo = imagenes[indiceImagen % imagenes.length];
    document.body.style.backgroundImage = `url(./dist/assets/${imagenFondo})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, [indiceImagen, imagenes]);

  return null;
};

export default FondoImagenes;