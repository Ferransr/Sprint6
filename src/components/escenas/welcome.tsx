import { ButtonWelcome, FondoWelcome, Contenedor, TituloWelcome, TextoWelcome } from "../styled-components/styled-div";

interface WelcomeProps {
  onContinuar: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onContinuar }) => {
  return (
    <Contenedor>
      <FondoWelcome>
        <TituloWelcome>Welcome</TituloWelcome>
        <TextoWelcome>
        A client whose main product is a business management website developed with React, has asked us to develop a tutorial, in which, using two buttons, new users can move forward and backward in the tips, modifying the help text and background image.
        </TextoWelcome>
        <ButtonWelcome onClick={onContinuar}>Continuar</ButtonWelcome>
      </FondoWelcome>
    </Contenedor>
  );
};

export default Welcome;
