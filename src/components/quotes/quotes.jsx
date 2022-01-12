import styled from "styled-components";
import { string, func } from "prop-types";
import Button from "../Button/button";

const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <Wrapper>
            <Quote role='p'>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>I'm Feeling Bufto</Button>
        </Wrapper>
    );
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func 
}

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Quotes;