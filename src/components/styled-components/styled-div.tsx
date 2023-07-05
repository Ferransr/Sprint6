import styled from 'styled-components';

interface StyledDivProps {
  resaltado: boolean;
}

export const StyledDiv = styled.div<StyledDivProps>`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    border: 2px solid black;
    border-radius: 50px;
    margin-bottom: 1.5em;
    padding: 0 1em;
    background-color: ${(props) => props.resaltado ? 'salmon' : '#eaeaea'};
    /* opacity: ${(props) => props.resaltado ? 1 : 0.5}; */
`;

export const ButtonsSelector = styled.button`
    color: black;
    background-color: #eaeaea;
    font-size: 1.5em;
    padding: 0.8em 1em;
    margin-bottom: 1.5em;
`;
