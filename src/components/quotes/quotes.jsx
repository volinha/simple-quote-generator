import styled from "styled-components";
import { string, func } from "prop-types";
import Button from "../Button/button";

const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <Wrapper>
            <QuoteWrapper>
                <Quote role='p'>{quote}</Quote>
                <Speaker>- {speaker}</Speaker>
            </QuoteWrapper>
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

const QuoteWrapper = styled.div`
    flex: 1;
    display: flex;
    background: rgba(0,0,0,0.5);
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
`

export default Quotes;