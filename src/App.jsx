import { useState, useEffect, useRef } from 'react';
import SasukeImg from './images/sasuke.png'
import styled from 'styled-components';
import Quotes from './components/quotes/quotes';
import { getQuote } from './services/quotesService/quotesService';
import typewriterSound from '../src/sounds/typewriter-hit.wav';

const audio = new Audio(typewriterSound);

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SasukeImgComponent = styled.img`
  max-width: 30vw;
  align-self: flex-end;
`

function App() {
  const isMounted = useRef(true);

  const [quoteText, setQuoteText] = useState({ quote: 'Loading...', speaker: 'Loading...' });

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current){
      /* audio.play(); */
      setQuoteText(quote);
    };
  }

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quoteText} onUpdate={onUpdate} />
      <SasukeImgComponent src={SasukeImg} alt="Sasuke" />
    </Content>
  );
}



export default App;