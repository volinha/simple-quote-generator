import { useState } from 'react';
import SasukeImg from './images/sasuke.png'
import styled from 'styled-components';
import Quotes from './components/quotes/quotes';
import { getQuote } from './services/quotesService/quotesService';

const audio = new Audio

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

  const [quoteText, setQuoteText] = useState({ quote: '', speaker: '' });

  const onUpdate = async () => {
    const quote = await getQuote();
    setQuoteText(quote);
  }

  return (
    <Content>
      <Quotes {...quoteText} onUpdate={onUpdate} />
      <SasukeImgComponent src={SasukeImg} alt="o rei" />
    </Content>
  );
}



export default App;