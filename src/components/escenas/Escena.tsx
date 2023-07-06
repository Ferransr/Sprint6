import { StyledDiv } from "../styled-components/styled-div";

type Frase = {
  id: number;
  text: string;
};

type EscenaProps = {
  frases: Frase[];
  indiceFraseResaltada: number;
};

export const Escena = (props: EscenaProps) => {
  const listItems = props.frases.map((frase, index) => (
    <StyledDiv key={frase.id} resaltado={index === props.indiceFraseResaltada}>
      {frase.text}
    </StyledDiv>
  ));
  return <div>{listItems}</div>;
};

export default Escena;

/* interface Frase {
  id: number;
  text: string;
}
 interface EscenaProps {
  frases: Frase[];
}

 const Escena: React.FC<EscenaProps> = (props) => {
  const listItems = props.frases.map((frase) => (
    <p key={frase.id}>{frase.text}</p>
  ));
   return <div>{listItems}</div>;
};
 export default Escena; */
