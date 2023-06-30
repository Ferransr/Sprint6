interface Frase {
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
 export default Escena;