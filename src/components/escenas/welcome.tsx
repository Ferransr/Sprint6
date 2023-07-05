interface BienvenidaProps {
    onContinuar: () => void;
  }
  
  const Bienvenida: React.FC<BienvenidaProps> = ({ onContinuar }) => {
    return (
      <div>
        <h1>Bienvenido</h1>
        <button onClick={onContinuar}>Continuar</button>
      </div>
    );
  }

  export default Bienvenida;