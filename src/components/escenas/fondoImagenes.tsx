import { useEffect } from "react";

interface FondoImagenesProps {
  indiceImagen: number;
  imagenes: string[];
}

const FondoImagenes = (props: FondoImagenesProps) => {
  const { indiceImagen, imagenes } = props;
  const baseUrl = window.location.hostname === 'ferransr.github.io' ? '/Sprint6' : '';

  useEffect(() => {
    const imagenFondo = imagenes[indiceImagen % imagenes.length];
    document.body.style.backgroundImage = `url(${baseUrl}/assets/img/${imagenFondo})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, [indiceImagen, imagenes, baseUrl]);

  return null;
};

export default FondoImagenes;
