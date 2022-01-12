import SasukeImg from './images/sasuke.png'
import styled from 'styled-components';
import Quotes from './components/quotes/quotes';

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
  return (
    <Content>
      <Quotes quote='Hello WWWorld!' speaker='John Doe' />
      <SasukeImgComponent src={SasukeImg} alt="o rei"/>
    </Content>
    );
}



export default App;