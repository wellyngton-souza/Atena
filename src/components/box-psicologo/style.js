import { styled } from "styled-components";

export const SpaceHome = styled.div`
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Boxpsicologo = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 14px;

    height: 135px;
    width: 100%;
    min-width: 800px;
    background-color: white;
    border: 1px solid black;

    margin-top: 20px;

    h2{
        border-bottom: 4px solid #BC9EFF;
    }

    h2, h3{
        margin: 12px;
    }

    .dados-psicologo{
        width: 100%;

        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-template-rows: repeat(2, 1fr);
    }
`;