import styled from "styled-components";
import { string } from "prop-types";

export const Button = styled.button`
    background: #222;
    color: #FFF;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'Roboto Mono', Roboto, sans-serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    transition: ease all 0.3s;

    &:hover{
        background: #DDD;
        color: #222;
    }
`;

Button.propTypes = {
    children: string
}

export default Button;