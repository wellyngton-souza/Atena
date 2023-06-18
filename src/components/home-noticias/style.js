import { styled } from "styled-components";

export const Boxnoticias = styled.div`
    box-sizing: border-box;
    padding: 10px 20px;

    width: 374px;
    min-width: 374px;

    border: 1px solid black;
    background-color: white;

    margin-top: 20px;
    margin-left: 20px;

    h2{
        font-size: 40px;
        font-family: arial;
    }

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;