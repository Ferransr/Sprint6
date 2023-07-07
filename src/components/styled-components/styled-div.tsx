import styled from "styled-components";

interface StyledDivProps {
  resaltado: boolean;
}

export const StyledDiv = styled.div<StyledDivProps>`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 3em;
  width: 60em;
  border: 2px solid black;
  border-radius: 50px;
  margin-bottom: 1.5em;
  padding: 0 1em;
  background-color: ${(props) => (props.resaltado ? "salmon" : "#eaeaea")};
  opacity: ${(props) => (props.resaltado ? 1 : 0.5)};
`;

export const ButtonsSelector = styled.button`
  justify-content: center;
  color: black;
  background-color: #eaeaea;
  width: 140px;
  height: 60px;
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1.5em;
  margin-inline: 0.5em;
  border: solid 3px;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: salmon;
    color: white;
  }
`;

export const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
  height: 100%;
  width: 100%
`;

export const TituloWelcome = styled.h1`
color: #00396b;
font-size: 4em;
font-weight: bolder;
text-align:center ;
margin-top: 15px;
margin-bottom: -3px;
`;

export const TextoWelcome = styled.p`
color: #19006c;
text-align:center ;
width: 85%;
`;

export const ButtonWelcome = styled.button`
  color: #efefef;
  background-color: #4e68ff;
  font-size: 1.5em;
  padding: 0.6em 0.8;
  margin-top: 15px;
  margin-bottom: 30px;
  border-radius: 7px;
  border: solid 0px;
  width: 150px;
  height: 50px;
  cursor: pointer;


  &:hover {
    background-color: #102bc3;
    color: #ffffff;
  }
`;

export const FondoWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d2e3ff;
  height: 15%;
  width: 50%;
  border: 5px solid;
  border-color: #f3d602;
  border-radius: 5px;
`;

